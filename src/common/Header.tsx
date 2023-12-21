import logo from "../assets/icons/Vector2.png";
import { FaCog, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import Greeter from "./Greeter";
import "../App.css"
import MobileMenu from "./MobileMenu";


const Header = () => {
  return (
    <>
      <header className="bg-darkBlue py-8 fixed w-full z-10">
        <div className="flex justify-between px-2">
          <div className="logo">
            <img src={logo} alt="app-logo" />
          </div>
          <div className="text-green">
            <h1 className="heading pb-2">
              DASHBOARD
            </h1>
          </div>

          <div className="flex lg:gap-4 md:gap-3 gap-1 lg:mr-[34%] md:mr-[45%]">
            <div className="lg:mr-2 md:mr-2 mr-6">
              <Greeter />
            </div>
            <div>
              <MobileMenu />
            </div>
            <Link to="/notification">
              <div className="notification text-green animate-pulse">
                <FaBell size={24} className="icon"  />
              </div>
            </Link>
            <div className="settings">
              <Link to="/setting" className="text-green animate-pulse">
                <FaCog size={24} className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
