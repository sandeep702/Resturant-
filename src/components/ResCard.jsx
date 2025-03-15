import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        sla: { deliveryTime },
    } = resData.info;

    return (
        <div className="res-card">
            <img alt="logo" src={CDN_URL + cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default ResCard;