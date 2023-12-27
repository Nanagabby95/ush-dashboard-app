// Sidebar.tsx
import { useEffect, useState } from 'react';
import {
  FaSitemap, 
  FaBalanceScale, 
  // FaChartBar, 
  FaCogs, 
  // FaBullseye,
  // FaBriefcase, 
  // FaLightbulb , 
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logout from '../components/Buttons/Logout';


const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const isActive = (path: string) => {
    return path === activeLink ? 'active-link' : '';
  };
  return (
    <div className='flex flex-col pt-20 items-center'>
      <ul className='p-6 fixed'>
      
      <li className={`flex animate-pulse mt-6 ${isActive('/dashboard/visionstatement')}`}>
        <FaSitemap className='mr-2 heading' />
        <Link to="/dashboard/visionstatement">Vision Statement</Link>
      </li>
      <li className={`mt-6 animate-pulse flex ${isActive('/dashboard/problems')}`}>
        <FaCogs className='mr-2 heading' />
        <Link to="/dashboard/problems">Problems and Challenges</Link>
      </li>
      <li className={`mt-6 flex  animate-pulse ${isActive('/dashboard/strategicplans')}`}>
        <FaBalanceScale className='mr-2 heading' />
        <Link to="/dashboard/strategicplans">Strategic Plans</Link>
      </li>
      <div className='mt-80'>
        <Logout />
      </div>
      </ul>
    </div>
  );
};

export default Sidebar;
