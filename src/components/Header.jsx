import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header"> 
            <div className="logo">
                <img  src={LOGO_URL}></img>
            </div>
            <div className="nav-items flex ">
                <ul className="items flex " >
                    <li>Home</li>
                    <li >About </li>
                    <li>contact us </li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    );
};
export default Header;