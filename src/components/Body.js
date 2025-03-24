import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import resList from "../utils/mockData";
import UIShimmer from "./UIShimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=31.2275728&lng=75.7608148&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();
      console.log("Fetched data:", json);

      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const list =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      setListOfRestaurant(list);
      setFilteredResturant(list);
    } catch (error) {
      console.error("Fetch error:", error);
      setListOfRestaurant(resList);
      setFilteredResturant(resList);
    }
  };

  if (listOfRestaurants.length === 0) {
    return <UIShimmer />;
  }
  const handleSearch = () => {
    const trimmedText = searchText.trim();

    if (trimmedText === "") {
      setFilteredResturant(listOfRestaurants);
      return;
    }

    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(trimmedText.toLowerCase())
    );
    setFilteredResturant(filtered);
  };

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredResturant(listOfRestaurants);
    }
  }, [searchText, listOfRestaurants]);

  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="src"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Hungry ?  Search here....."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {filteredResturant.map((restaurant) => (
    <ResCard key={restaurant.info.id} resData={restaurant} />
  ))}
</div>

    </div>
  );
};

export default Body;
