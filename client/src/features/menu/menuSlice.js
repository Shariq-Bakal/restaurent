import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuService from "./menuService";

const initialState = {
    menus : [],
    isError :false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const getDishes = createAsyncThunk(
  "menu/getDishes",
  async (category, thunkAPI) => {
    try {
      return await menuService.getDishes(category);
    } catch (error) {
      const message = error.message || "Failed to fetch";
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDishes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDishes.fulfilled, (state, action) => {
        console.log("Fetched dishes in slice:", action.payload); 
        state.isLoading = false;
        state.isSuccess = true;
        state.menus = action.payload;
      })
      .addCase(getDishes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch menus";
      });
  },
});

export default menuSlice.reducer