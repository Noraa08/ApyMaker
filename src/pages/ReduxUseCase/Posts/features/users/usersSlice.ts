import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export interface UserState { 
    id: string;
    name: string;
}

const initialState = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
] as UserState[]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state: RootState) => state.yumeUsers;

export default usersSlice.reducer