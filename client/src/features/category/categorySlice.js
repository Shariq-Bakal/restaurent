import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const initialState = {
    categories: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

// ✅ Corrected createAsyncThunk
export const getCategories = createAsyncThunk(
  "category/getcategory",
  async (_, thunkAPI) => {
    try {
      return await categoryService.getCategories(); // Consider renaming register to something like getCategories
    } catch (error) {
      const message = error.message || "Failed to fetch";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch categories";
      });
  },
});


export const {reset} = categorySlice.actions
export default categorySlice.reducer
