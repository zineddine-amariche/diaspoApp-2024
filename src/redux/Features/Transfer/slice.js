import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import Toast from 'react-native-simple-toast';
import { onError } from '../../../hooks';
import transfersService from './service';

export const ConfirmTransfer = createAsyncThunk(
  'transfers/post',
  async (object, thunkAPI) => {
    try {
      const token = thunkAPI.getState().token.token;
      const {onSuccessTransfer, onErrorActionTransfer, info} = object;
      let res = await transfersService.api(info, token);

       if (res.status == 'success') {
         onSuccessTransfer();
       } else {
         onErrorActionTransfer();
       }
      return res;
    } catch (error) {
      const {onErrorActionTransfer} = object;
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
          onError(message.status, message.statusDescription, onErrorActionTransfer);
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

const cashoutSlice = createSlice({
  name: 'transfers',
  initialState: {
    isError: false,
    status: false,
    isLoading: false,
    message: '',
    result: null,
  },
  reducers: {
    clearTransfers: (state, action) => {
      state.isError = false;
      state.status = false;
      state.message = '';
      state.isLoading = false;
      state.result = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(ConfirmTransfer.pending, state => {
        state.isLoading = true;
      })
      .addCase(ConfirmTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = true;
        state.result = action.payload;
      })
      .addCase(ConfirmTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {clearTransfers} = cashoutSlice.actions;
export default cashoutSlice.reducer;
