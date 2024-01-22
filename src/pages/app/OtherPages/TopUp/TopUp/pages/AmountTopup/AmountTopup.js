import {StyleSheet, Keyboard, View, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Formik} from 'formik';
import {useAmoutTopup} from './Hooks/useAmountTopup';
import Space from '../../../../../../../components/Space';
import {PrimaryButtonLinear} from '../../../../../../../components/Buttons';
import {COLORS} from '../../../../../../../theme';
import PrimaryInput from '../../../../../../../components/Input';
import ReturnHeader from '../../../../../../../components/Headers/root/ReturnHeader';
import CreatedSuccess from '../../../../../../../components/views/Layouts/AuthLayout/Model';
import {useDispatch, useSelector} from 'react-redux';
import {handlAmount} from '../../../../../../../redux/Features/Payements/MTN/slice';
import {ShowBg} from '../../../../../../../redux/Features/Payements/creditCard/slice';
import {KeyboardAvoidingView} from 'react-native';
import {
  BodyModel,
  BodyModelErr,
} from '../../../../../../../components/Models/payements';
import {Modalize} from 'react-native-modalize';
import RenderCheck from '../../../../../../../components/payementsCheck/ContentRenders';

const AmountTopup = ({navigation, route}) => {
  const {onSubmit, onCheckout, state, schema} = useAmoutTopup();
  const {data, item} = route.params;

  const {isLoading} = useSelector(state => state.transaction);
  const {isCreditCardLoading, bg} = useSelector(state => state.creditCard);
  const dispatch = useDispatch();

  const [success, setsuccess] = useState(false);
  const [error, setError] = useState(false);

  const onDissmis = useCallback(() => {
    setsuccess(false);
    navigation.navigate('TopUp', {data});
  }, []);

  const onDissmisError = useCallback(() => {
    setError(false);
    navigation.navigate('TopUp', {data});
  }, []);

  const showSuccess = () => {
    setsuccess(true);
    dispatch(ShowBg(false));
  };
  const onSuccessAction = useCallback((value, clientSecret) => {
    // dispatch(handlAmount(value));
    handleCloseModal();
    setTimeout(() => {
      let obj = {
        showSuccess,
        clientSecret,
      };
      onCheckout(obj);
    }, 700);
  }, []);

  const onSuccessActionMTN = useCallback((value, clientSecret) => {
    // dispatch(handlAmount(value / 100));
     setTimeout(() => {
      setsuccess(true);
     }, 700);
  }, []);

  const onErrorAction = useCallback(() => {
    setError(true);
    dispatch(ShowBg(false));
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const modalRef = useRef(null);

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  const nav = (to, data) => {
    navigation.navigate(to, data);
  };

  const onOpen = () => {
    modalRef.current?.open();
  };

  const [Object, setObject] = useState(null);
  return (
    <ReturnHeader
      title={
        item.value == 'Main Account' ? 'Credit / Debit Card' : 'MTN Payment'
      }
      goBack={() => {
        navigation.navigate('TopUp', {data});
      }}
      Loading={isLoading || isCreditCardLoading}>
      {bg ? (
        <View
          style={{
            flex: 1,

            backgroundColor: COLORS.blueGreenOpacity9,
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 2,
            marginTop: 90,
          }}></View>
      ) : null}

      <View
        style={{
          flex: 1,
          padding: 1,
          width: '100%',
          alignItems: 'center',
          backgroundColor: COLORS.finished,
        }}>
        <Space space={30} />
        <Formik
          initialValues={state}
          validationSchema={schema}
          onSubmit={(values, formikAction) => {
            formikAction.setSubmitting(false);
            formikAction.resetForm();

            let obj = {
              amount: Math.floor(values.amount * 100),
              type: item.value,
              currency: 'EUR',
              originator: {
                originatorType: 'User',
                originatorId: data?.userId,
              },
              description: 'Top Up',
              regions: ['5e99a07063389569485205f3'],
            };
            let info = {
              accountId: data.accountId,
              userId: data?.userId,
              obj,
              amount: Math.floor(values.amount * 100),
            };
            let object = {
              info,
              onErrorAction,
              onSuccessAction,
              onSuccessActionMTN,
            };
            // onSubmit(object);
            dispatch(handlAmount(Math.floor(values.amount)));
            modalRef.current?.open();
            setObject(object);
          }}>
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            isValid,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => {
            const {amount} = values;

            return (
              <KeyboardAvoidingView
                style={{flex: 1, width: '100%', alignItems: 'center'}}
                behavior="padding">
                <Pressable
                  style={{
                    backgroundColor: COLORS.finished,
                    width: '90%',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                  onPress={dismissKeyboard}>
                  <Pressable
                    style={{
                      backgroundColor: COLORS.white,
                      borderRadius: 8,
                      shadowColor: '#171717',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.2,
                      shadowRadius: 2,
                      elevation: 2,
                      padding: 20,
                      marginTop: 10,
                      width: '100%',
                    }}
                    onPress={dismissKeyboard}>
                    {/* <Txt color={COLORS.slateGrey} fontSize={14}>
                      You are topping up your {item?.label} account in euro
                      using
                      <Txt color={COLORS.darkBlueGrey}>
                        {' '}
                        Credit Card No.
                        {item?.price}.
                      </Txt>
                    </Txt> */}
                    <Space space={20} />
                    <View style={{height: 90}}>
                      <PrimaryInput
                        name={amount}
                        Label={'Top up amount'}
                        placeholder="15.000"
                        style={styles.Input}
                        errors={errors.amount}
                        touched={touched.amount}
                        value={amount}
                        onBlur={() => {
                          handleBlur('amount');
                          dismissKeyboard();
                        }}
                        onChangeText={handleChange('amount')}
                        amount="euro"
                        keyboardType="numeric"
                      />
                    </View>
                    <Space space={20} />
                  </Pressable>
                  <View style={styles.containerButton}>
                    <PrimaryButtonLinear
                      width={'100%'}
                      onPress={() => {
                        handleSubmit();
                      }}
                      disabled={true}
                      loading={isLoading}>
                      Next
                    </PrimaryButtonLinear>
                  </View>
                </Pressable>
              </KeyboardAvoidingView>
            );
          }}
        </Formik>
      </View>
      <CreatedSuccess Visible={success} onDissmis={onDissmis} top={90}>
        {BodyModel ? <BodyModel onDissmis={onDissmis} /> : null}
      </CreatedSuccess>

      <CreatedSuccess Visible={error} onDissmis={onDissmisError} top={90}>
        {BodyModel ? <BodyModelErr onDissmis={onDissmisError} /> : null}
      </CreatedSuccess>

      <Modalize
        snapPoint={440}
        ref={modalRef}
        overlayStyle={{
          backgroundColor: COLORS.blueGreenOpacity9,
        }}
        adjustToContentHeight={false}>
        <RenderCheck
          nav={nav}
          type={'cashin'}
          closeAll={handleCloseModal}
          Object={Object}
        />
      </Modalize>
    </ReturnHeader>
  );
};

export default AmountTopup;

const styles = StyleSheet.create({
  containerButton: {backgroundColor: COLORS.white},
});
