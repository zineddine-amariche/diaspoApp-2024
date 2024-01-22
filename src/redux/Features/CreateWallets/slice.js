import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import Toast from 'react-native-simple-toast';
import {onError} from '../../../hooks';
import CreateEwalletsService from './service';
import transfersService from './service';

export const CreateEwallets = createAsyncThunk(
  'CreateEwallets/post',
  async (object, thunkAPI) => {
    try {
      const token = thunkAPI.getState().token.token;
      const {onSuccessAction,onErrorS, onErrorAction, info} = object;
      
      const {ClosePayementMthode} =info
      let res = await CreateEwalletsService.api(info, token);
      const {userId} =info
      console.log('res', res)
      if (res.status == 'success') {
        ClosePayementMthode()
        onSuccessAction(userId);
      } else {
        onErrorS();
      }
      return res;
    } catch (error) {
      const {onErrorAction} = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();

      console.log('message CreateEwallets', message);

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

const CreateEwalletsSlice = createSlice({
  name: 'CreateEwallets',
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
      .addCase(CreateEwallets.pending, state => {
        state.isLoading = true;
      })
      .addCase(CreateEwallets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = true;
        state.result = action.payload;
      })
      .addCase(CreateEwallets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {clearTransfers} = CreateEwalletsSlice.actions;
export default CreateEwalletsSlice.reducer;
