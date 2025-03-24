import { useEffect } from "react";
const Menu=()=>{
    useEffect(()=>{
        fetchMenu()
    },[]);
const fetchMenu=async ()=>{
    const data=await fetch("");
};
    return(
        <div className="menu">  
        <h1 >this is the menu </h1>
        </div>
   
    )
};
export default Menu;