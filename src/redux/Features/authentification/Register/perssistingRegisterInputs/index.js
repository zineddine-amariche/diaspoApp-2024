import {createSlice} from '@reduxjs/toolkit';

const registerPerssisteSlice = createSlice({
  name: 'register',
  initialState: {
    isReturns: null,
    step_A: [],
    step_B: [],
    step_C: [],
    CCA2: null,
    // step_D: [],
  },
  reducers: {
    activateReturn: (state, action) => {
      state.isReturns = action.payload;
    },
    get_step_A: (state, action) => {
      state.step_A = action.payload;
    },
    get_step_B: (state, action) => {
      state.step_B = action.payload;
    },
    get_step_C: (state, action) => {
      state.step_C = action.payload;
    },
 
    getCCA2: (state, action) => {
      state.CCA2 = action.payload;
    }
    // get_step_D: (state, action) => {
    //   state.step_D = action.payload;
    // },
  },

  extraReducers: builder => {},
});

export const {activateReturn, get_step_A,getCCA2, get_step_B, get_step_C, get_step_D} =
  registerPerssisteSlice.actions;
export default registerPerssisteSlice.reducer;
