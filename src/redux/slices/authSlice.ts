import {createSlice} from "@reduxjs/toolkit";

type AuthState = {
    authUser: string,
    userName: string
}

const initialState: AuthState = {
    authUser: "",
    userName: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.authUser = action.payload.email || '';
            if (state.authUser.includes('admin'))
                state.userName = "ADMIN"
            else
                state.userName = action.payload.name || '';
        },
        logoutAction: (state) => {
            state.authUser = '';
            state.userName = '';
        }
    }

})

export const {loginAction, logoutAction} = authSlice.actions;
export const authReducer = authSlice.reducer;