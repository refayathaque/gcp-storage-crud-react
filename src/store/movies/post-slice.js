import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// change values below accordingly
const what = "Movies"; // i.e., what are you GETing, POSTing, PUTing, etc., have first letter capitalized
const endpoint = "api/movies";

// change name of arrow function below from `postMovies` to `post${what}`, you set `what` above
const postMovies = createAsyncThunk(
  `${what.toLowerCase}/post${what}`,
  async (payload, thunkAPI) => {
    const response = await axios.post(endpoint, payload);
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
      // change `postMovies` below to `post${what}`
      .addCase(postMovies.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      // change `postMovies` below to `post${what}`
      .addCase(postMovies.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        if (state.loading === "pending") {
          state.loading = "idle";
          // change `movies` to lower-cased `what`
          state.entities = action.payload.data.movies;
        }
      })
      // change `postMovies` below to `post${what}`
      .addCase(postMovies.rejected, (state, action) => {
        console.log("action.error", action.error);
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

// change named export below from `postMovies` to `post${what}`
export { postMovies };

export default slice.reducer;
