import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import "../styles/mobilemenu.css";
import "../App.css"

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//   const closeMenu = () => {
//   };

  return (
    <div className="lg:hidden md:hidden">
      <button onClick={toggleMenu} className="text-xl text-green animate-pulse p-2 absolute right-14 top-6">
        {isMenuOpen ? <FaTimes  className="icon" /> : <FaBars  />}
      </button>
      {isMenuOpen && (
        <div className='mobilesidebar' style={{ }}>
          <Sidebar />
          {/* <button onClick={closeMenu} className="text-3xl text-white p-2 fixed top-4 left-4">
            <FaTimes />
          </button> */}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
