import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {onError} from '../../../../../hooks';
import Toast from 'react-native-simple-toast';
import checkEmail from './service';

export const checkEmailExists = createAsyncThunk(
  'emailExists/post',
  async (object, thunkAPI) => {

    const {email, onEmailSuccessAction} = object;
    try {
      const token = thunkAPI.getState().token.token;

      let res = await checkEmail.api(email, token);
      if (res.status === 'success' && res.data.isAlreadyExist) {
         onEmailSuccessAction(email);
        return res.data;
      } else {
        Toast.show("Email not found");
        return res.data;
      }
    } catch (error) {
      const {onErrorAction} = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();

      console.log('message', message);

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
const emailForgotExistsSlice = createSlice({
  name: 'emailExists',
  initialState: {
    status: 'idle',
    error: null,
    exists: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(checkEmailExists.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(checkEmailExists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.exists = action.payload.exists;
        state.isLoading = false;

      })
      .addCase(checkEmailExists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoading = false;

      });
  },
});

export default emailForgotExistsSlice.reducer;
