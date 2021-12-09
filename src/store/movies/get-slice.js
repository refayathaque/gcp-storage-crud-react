import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// change values below accordingly
const what = "Movies"; // i.e., what are you GETing, POSTing, PUTing, etc., have first letter capitalized
const endpoint = "api/movies";

// change name of arrow function below from `getMovies` to `get${what}`, you set `what` above
const getMovies = createAsyncThunk(
  `${what.toLowerCase}/get${what}`,
  async (thunkAPI) => {
    const response = await axios.get(endpoint);
    console.log("response", response);
    return response;
  }
);

const slice = createSlice({
  name: what,
  initialState: { entities: [], loading: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // change `getMovies` below to `get${what}`
      .addCase(getMovies.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      // change `getMovies` below to `get${what}`
      .addCase(getMovies.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        if (state.loading === "pending") {
          state.loading = "idle";
          // change `movies` to lower-cased `what`
          state.entities = action.payload.data.movies;
        }
      })
      // change `getMovies` below to `get${what}`
      .addCase(getMovies.rejected, (state, action) => {
        console.log("action.error", action.error);
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

// change named export below from `getMovies` to `get${what}`
export { getMovies };

export default slice.reducer;
