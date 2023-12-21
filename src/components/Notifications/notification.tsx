import { useEffect} from 'react';

const NotificationPage = () => {
  // Assume there is a state variable to track whether there is a new update
  const hasNewUpdate = false; // Set this based on your logic

  // You can use useEffect to perform actions when the page is loaded
  useEffect(() => {
    // Add logic here to fetch or check for updates
  }, []);

  return (
    <div>
      {hasNewUpdate ? (
        <div>
          <h2>New Update Available!</h2>
        </div>
      ) : (
        <div className='lg:pt-2 pt-20'>
          <h2 className='text-18px text-darkBlue'>No New Updates</h2>
          <div className='w-[40%]'>
            <img src="https://media.istockphoto.com/id/513231275/photo/depressed-3d-man-sitting-on-white.jpg?s=612x612&w=0&k=20&c=kvFZI-tQUAajOjQnU-9GRsvB3UoKoObrfVloIugAXSI=" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
