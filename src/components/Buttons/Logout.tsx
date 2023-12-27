import { FaSignOutAlt } from 'react-icons/fa';
import axios, { AxiosError } from 'axios'; 

const Logout = () => {
  const handleLogout = async () => {
    try {
      // The real API goes in here
      await axios.post('/api/logout');


      // Redirect to the login page
      window.location.href = '/login';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios errors
        const axiosError = error as AxiosError; 
        console.error('Logout failed:', axiosError.message);
      } else {
        // Handle other types of errors
        console.error('Logout failed:', (error as Error).message);
      }
    }
  };

  return (
    <button onClick={handleLogout} className='flex'>
      <FaSignOutAlt className='mr-2 text-green' />
      Logout
    </button>
  );
};

export default Logout;
