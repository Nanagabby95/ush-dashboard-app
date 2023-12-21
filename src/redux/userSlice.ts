// // src/redux/userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserState } from './types';

// const initialState: UserState = {
//   isUserRegistered: false,
//   userName: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setRegisteredUser: (state, action: PayloadAction<string>) => {
//       state.isUserRegistered = true;
//       state.userName = action.payload;
//     },
//     setDefaultUser: (state) => {
//       state.isUserRegistered = false;
//       state.userName = 'Admin';
//     },
//   },
// });

// export const { setRegisteredUser, setDefaultUser } = userSlice.actions;
// export default userSlice.reducer;
