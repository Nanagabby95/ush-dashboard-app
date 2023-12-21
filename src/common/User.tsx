// // Example usage in a React component
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setRegisteredUser, setDefaultUser } from '../redux/userSlice';

// const User: React.FC = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user);

  
//     useEffect(() => {
//       dispatch(setRegisteredUser('John Doe'));
//       dispatch(setDefaultUser());
//     }, [dispatch]);
  
//     return (
//       <div>
//         <p>User is registered: {user.isUserRegistered.toString()}</p>
//         <p>User Name: {user.userName}</p>
//       </div>
//     );
//   };
  
//   export default User;