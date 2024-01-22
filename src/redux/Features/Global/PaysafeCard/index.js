import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const PaySafeCardSlice = createSlice({
  name: 'CreateEwallets',
  initialState: {
    code1: null,
    code2: null,
    code3: null,
    code4: null,
    isSuccess:false
  },
  reducers: {
    getPayCode1: (state, action) => {
      state.code1 = action.payload;
    },
    getPayCode2: (state, action) => {
      state.code2 = action.payload;
    },
    getPayCode3: (state, action) => {
      state.code3 = action.payload;
    },
    getPayCode4: (state, action) => {
      state.code4 = action.payload;
    },
    showIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    
    clearCodeVoucher: (state, action) => {
      state.code1 = null;
      state.code2 = null;
      state.code3 = null;
      state.code4 = null;
    },
  },

  extraReducers: builder => {},
});

export const {getPayCode1,clearCodeVoucher,showIsSuccess, getPayCode2, getPayCode4, getPayCode3} =
  PaySafeCardSlice.actions;
export default PaySafeCardSlice.reducer;
