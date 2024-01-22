import {createSlice} from '@reduxjs/toolkit';

const AppSlice = createSlice({
  name: 'App',
  initialState: {
    version: null,
  },
  reducers: {
    resetAppGlobalState: state => {
      state.version = false;
    },
  },

  extraReducers: builder => {
    builder;
  },
});

export const {resetAppGlobalState} = AppSlice.actions;
export default AppSlice.reducer;
