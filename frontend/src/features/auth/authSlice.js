// 1. import 2 things always
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 2. create initial state
const initialState = {
  user: null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

// 5. create function to call API
export const regUser = createAsyncThunk(
  "register",
  async (userData, thunkAPI) => {
    try {
      let response = await axios.post(
        "http://localhost:5174/api/users/register-user",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// 3. create slice/ global context
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userSuccess = false;
      state.userError = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        console.log(action);
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});

// 4. export it to store
export default authSlice.reducer;
export const { userReset } = authSlice.actions;
