import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getposts = createAsyncThunk(
  "getposts",
  async (id = "", thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getpost = createAsyncThunk(
  "getpost",
  async (id = "", thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postslice = createSlice({
  name: "postDetails",
  initialState: {
    postDetail: [],
    postinfo: {},
    loadingPosts: false,
    errorPosts: null,
    loadingPost: false,
    errorPost: null,
    titleValue: "",
    bodyValue: "",
  },
  reducers: {
    addPost: (state, action) => {
      state.postDetail = [...state.postDetail, action.payload];
    },
    getTitle: (state, action) => {
      state.titleValue = action.payload;
    },
    getBody: (state, action) => {
      state.bodyValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getposts.pending, (state, action) => {
      state.loadingPosts = true;
    });
    builder.addCase(getposts.fulfilled, (state, action) => {
      state.loadingPosts = false;
      state.postDetail = action.payload;
    });
    builder.addCase(getposts.rejected, (state, action) => {
      state.loadingPosts = false;
      state.errorPosts = action.error.message;
    });
    builder.addCase(getpost.pending, (state, action) => {
      state.loadingPost = true;
    });
    builder.addCase(getpost.fulfilled, (state, action) => {
      state.loadingPost = false;
      state.postinfo = action.payload;
    });
    builder.addCase(getpost.rejected, (state, action) => {
      state.loadingPost = false;
      state.errorPost = action.error.message;
    });
  },
});

export const { addPost, getTitle, getBody } = postslice.actions;
export const postDetails = postslice.reducer;
