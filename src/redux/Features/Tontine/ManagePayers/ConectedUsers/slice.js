import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onError } from "../../../../../hooks";
import connectedService from "../ConectedUsers/service";

// export const connected = createAsyncThunk(
//   "contacts/getNonAppUsers",
//   async (object, thunkAPI) => {
//     // console.log('object', object)
//     try {
//       let { token, mobileNumbers } = object;
//       return await connectedService.api(mobileNumbers, token);
//     } catch (error) {
//       const message =
//         (error.response && error.response.data) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
export const connected = createAsyncThunk(
  'contacts/getNonAppUsers',
  async (object, thunkAPI) => {
    const {obj} = object;
    try {
      let {mobileNumbers} = obj;
      const {onSuccessAction,onErrorAction} = object;

      // return await connectedService.api(mobileNumbers, token);
      const token = thunkAPI.getState().token.token;
      let res = await connectedService.api(mobileNumbers, token);
     
      if (res.status == 'success') {
        onSuccessAction();
        return res.data.walletAccountUserMobile
      } 
      // else {
      //   onErrorAction();
      // }
    } catch (error) {
      const {onErrorAction} = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();

      console.log('message ConfirmTransfer', message);

      if (
        message.status == 'error' &&
        message.status &&
        message.statusDescription !== ''
      ) {
        Toast.show(`${message.status} , ${message.statusDescription}`);
      } else if (!message.status) {
        Toast.show(`${message}`);
      } else {
        if (message.statusDescription == 'Expired token') {
          onError(message.status, message.statusDescription, onErrorAction);
        } else {
          onError(
            message.status,
            message.statusDescription == ''
              ? 'something went wrong'
              : message.statusDescription,
            null,
          );
        }
      }
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const userConnectedSlice = createSlice({
  name: "userConnected",
  initialState: {
    loading: false,
    message: null,
    connectedUsers: null,
    isError: null,
  },
  reducers: {
    resetUserConnected: (state, action) => {
      (state.loading = false), (state.message = null), (state.isError = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connected.pending, (state) => {
        state.loading = true;
      })
      .addCase(connected.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.connectedUsers = action.payload;
      })
      .addCase(connected.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetUserConnected } = userConnectedSlice.actions;

export default userConnectedSlice.reducer;
