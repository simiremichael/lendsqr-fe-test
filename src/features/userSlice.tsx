import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import  { UserModel } from '../api/UserModel'


interface UserAuthState {

  user: UserModel | null | undefined; 
}

const initialState: UserAuthState = { 
  user: null, 
} 


export const userSlice = createSlice({
  name: 'UserAuth',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<{ user: UserModel | null | undefined }>) => {
       state.user = action.payload.user;
    },
    }
})
export const selectCurrentUser = (state: RootState) => state.userState
export const {setUsers} = userSlice.actions;
export default userSlice.reducer;