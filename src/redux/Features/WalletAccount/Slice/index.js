import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {onError} from '../../../../hooks';
import getListwalletAccounts from '../Service';

export const walletAccountsBenef = createAsyncThunk(
  'wallet/accountbenef',
  async (object, thunkAPI) => {
    const {userId,amount,dispatchamount} = object;

    try {
      const token = thunkAPI.getState().token.token;
      let obj = {
        userId,
        token,
      };
      let res = await getListwalletAccounts.api(obj);

      if (res.status === 'success') {
        dispatchamount(amount)
        return res;
      }
    } catch (error) {
      // const {onErrorAction} = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log(' walletAccountsBenef message', message);

      if (
        message.status == 'error' &&
        message.status &&
        message.statusDescription !== ''
      ) {
        message.statusDescription
          ? Toast.show(
              `${message.status} , ${
                message.statusDescription == ''
                  ? 'something went wrong'
                  : message.statusDescription
              }`,
            )
          : Toast.show(`${message},something went wrong `);
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

export const walletAccounts = createAsyncThunk(
  'wallet/account',
  async (user, thunkAPI) => {
    //  console.log('user', user)
    try {
      const token = thunkAPI.getState().token.token;
      let res = await getListwalletAccounts.api(user, token);
      return res;
    } catch (error) {
      const {onErrorAction} = user;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log('walletAccounts message error', message);

      if (
        message.status == 'error' &&
        message.status &&
        message.statusDescription !== ''
      ) {
        message.statusDescription
          ? Toast.show(
              `${message.status} , ${
                message.statusDescription == ''
                  ? 'something went wrong'
                  : message.statusDescription
              }`,
            )
          : Toast.show(`${message},something went wrong `);
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

const walletAccountsSlice = createSlice({
  name: 'wallet',
  initialState: {
    walletAccount: null,
    walletAccountBenf: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    walletName: null,
    accountId: null,
    accountIdBenf: null,
    showConfirm: false,
    showSuccessTransfer: false,
    amount:null
  },
  reducers: {
    resetwalletAccount: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    getAmountTransfer: (state, action) => {
      state.amount = action.payload;
    },
    onHandleConfirmTransfer: (state, action) => {
      state.showConfirm = action.payload;
    },
    onHandleSuccessTransfer: (state, action) => {
      state.showSuccessTransfer = action.payload;
    },
  },

  extraReducers: builder => {
    builder

      .addCase(walletAccounts.pending, state => {
        state.isLoading = true;
      })
      .addCase(walletAccounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.walletAccount = action.payload.data;
        state.accountId = action.payload.data.walletAccounts[0].accountId;
      })
      .addCase(walletAccounts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.walletAccount = null;
      })
      .addCase(walletAccountsBenef.pending, state => {
        state.isLoading = true;
      })
      .addCase(walletAccountsBenef.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.showConfirm = true;
        state.walletAccountBenf = action.payload.data;
        state.accountIdBenf =
          action?.payload?.data?.walletAccounts[0]?.accountId;
      })
      .addCase(walletAccountsBenef.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.walletAccount = null;
      });
  },
});

export const {
  resetwalletAccount,
  onHandleSuccessTransfer,
  onHandleConfirmTransfer,
  getAmountTransfer
} = walletAccountsSlice.actions;
export default walletAccountsSlice.reducer;
