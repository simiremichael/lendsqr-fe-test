import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import  { UserModel } from '../api/UserModel'


interface UserDetailsAuthState {

  userDetails: UserModel | null | undefined; 
}

const initialState: UserDetailsAuthState = { 
    userDetails: null, 
} 


export const userDetailsSlice = createSlice({
  name: 'UserDetailsAuth',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<{ userDetails: UserModel | null | undefined }>) => {
      localStorage.setItem('userDetails', JSON.stringify({
        userDetails: action.payload.userDetails,
       })
       );
       state.userDetails = action.payload.userDetails;
    },
    }
})
export const selectCurrentUserDetails = (state: RootState) => state.userDetailsState
export const {setUserDetails} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;