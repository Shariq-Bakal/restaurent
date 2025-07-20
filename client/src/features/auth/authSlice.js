import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"


//Get user from local storage

const user = JSON.parse(localStorage.getItem("user")) //JSON.parse() takes that string and turns it into a JavaScript object. 



const initialState = {
    user : user?user:"null",
    isError:false,
    isSuccess :false,
    isLoading :false,
    message :""
}
//Register user

export const register = createAsyncThunk("/auth/register", async(user,ThunkAPI)=>{
    try{
        return await authService.register()
    }
    catch(error){
        const message = error.message
        return ThunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:()=>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers : (builder)=>{
        builder.
        addCase(register.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.user = null
            state.message = action.payload
        })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer