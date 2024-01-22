import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import { onError } from '../../../../hooks';
import payementMethodsService from './service';

export const listingMethods = createAsyncThunk(
  'listing/get',
  async (object, thunkAPI) => {
    try {
      const token = thunkAPI.getState().token.token;
      const {onErrorAction, onSuccessActionpayements,} = object;
      let res = await payementMethodsService.api(object, token);
      console.log('res', res)
       if (res.status == 'success') {
        onSuccessActionpayements();
       } else {
         onErrorAction();
       }
      return res;
    } catch (error) {
      const {onErrorAction} = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();

      console.log('message cashoutTransaction', message);

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

const payementsMethodSlice = createSlice({
  name: 'listing',
  initialState: {
    isError: false,
    status: false,
    isLoading: false,
    message: '',
    result: null,
    amount: '',
    balance:null
  },
  reducers: {
    clearTransactions: (state, action) => {
      state.isError = false;
      state.status = false;
      state.message = '';
      state.isLoading = false;
      state.result = null;
    },
    getBalance: (state, action) => {
      state.balance = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(listingMethods.pending, state => {
        state.isLoading = true;
      })
      .addCase(listingMethods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = true;
        state.result = action.payload;
      })
      .addCase(listingMethods.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {clearTransactions,getBalance, handlAmount} = payementsMethodSlice.actions;
export default payementsMethodSlice.reducer;
