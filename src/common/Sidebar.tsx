// Sidebar.tsx
import { useEffect, useState } from 'react';
import {
  FaSitemap, 
  FaBalanceScale, 
  FaChartBar, 
  FaUsers, 
  FaGlobe,
  FaCogs, 
  FaBullseye,
  FaBriefcase, 
  FaLightbulb , 
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
      <ul className='w-[350px] p-6 animate-pulse'>
      
      <li className={`pt-4 flex ${isActive('/dashboard/visionstatement')}`}>
        <FaSitemap className='mr-2' />
        <Link to="/dashboard/visionstatement">Vision Statement</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/orgStructure')}`}>

        <FaSitemap className='mr-2' />
        <Link to="/dashboard/orgStructure">Organization Structure</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/leadstability')}`}>
        <FaBalanceScale className='mr-2' />
        <Link to="/dashboard/leadstability">Leadership Stability</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/kpimeasurement')}`}>
        <FaChartBar className='mr-2' />
        <Link to="/dashboard/kpimeasurement">Key Performance Indicators</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/culturalshift')}`}>
        <FaUsers className='mr-2' />
        <Link to="/dashboard/culturalshift">Cultural Shift</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/globaltech')}`}>
        <FaGlobe className='mr-2' />
        <Link to="/dashboard/globaltech">Global Technological Leadership</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/pdiversification')}`}>
        <FaCogs className='mr-2' />
        <Link to="/dashboard/pdiversification">Product Diversification & Strategy</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/salesandmrktn')}`}>
        <FaBullseye className='mr-2' />
        <Link to="/dashboard/salesandmrktn">Sales&Marketing Team Establishment</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/talentacquis')}`}>
        <FaBriefcase className='mr-2' />
        <Link to="/dashboard/talentacquis">Talent Acquisition and Development</Link>
      </li>
      <li className={`pt-4 flex ${isActive('/dashboard/techinnovation')}`}>
        <FaLightbulb  className='mr-2' />
        <Link to="/dashboard/techinnovation">Technology Innovation</Link>
      </li>
      <div className='mt-20'>
        <Logout />
      </div>
      </ul>
    </div>
  );
};

export default Sidebar;
