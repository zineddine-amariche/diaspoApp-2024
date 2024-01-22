import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';
import Space from '../../../../../components/Space';
import {COLORS} from '../../../../../theme';
import {Txt} from '../../../../../components/utils';
import {PrimaryButtonLinear} from '../../../../../components/Buttons';
import VoucherInput from './components/voucher';
import {UseVoucher} from './components/useVoucher';
import ModelCodeDigit from './components/Modal';
import {useSelector} from 'react-redux';
import Forms from './components/Forms';

const PaySafeCodePin = ({navigation, route}) => {
  const {data, ind} = route.params;

  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [step, setstep] = useState(1);
  const [Title, setTitle] = useState(null);

  const modalRef2 = useRef(null);
  const modalRef3 = useRef(null);

  const renderStep = step => {
    switch (step) {
      case 1:
        return (
          <Step1
            modalRef2={modalRef2}
            modalRef3={modalRef3}
            data={data}
            ind={ind}
          />
        );
      case 2:
        return <Step2 />;

      default:
        return null;
    }
  };

  return (
    <ReturnHeader
      goBack={() => {
        navigation.navigate('DiaspoBottomTab');
        setstep(1);
        setTitle(null);
      }}
      title={'Paysafe Card'}
      Cancel="Return">
      <View style={{backgroundColor: COLORS.finished, flex: 1, width: '100%'}}>
        <ScrollView
          ref={scrollView => (scrollView = scrollView)}
          scrollEnabled={scrollEnabled}
          contentContainerStyle={styles.container}>
          {renderStep(step, modalRef2, modalRef3)}
        </ScrollView>
      </View>
    </ReturnHeader>
  );
};

export default PaySafeCodePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Step1 = ({data, ind}) => {
  const {handleVoucherCodeSubmit, onChange} = UseVoucher();

  const {isSuccess} = useSelector(state => ({
    ...state.PaySafeCard,
  }));

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: COLORS.finished}}
      behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Forms
          handleVoucherCodeSubmit={handleVoucherCodeSubmit}
          data={data}
          ind={ind}
        />
      </TouchableWithoutFeedback>
      <ModelCodeDigit success={isSuccess} onDissmis={onChange} />
    </KeyboardAvoidingView>
  );
};

const Step2 = () => {
  return (
    <>
      <Space space={Platform.OS == 'android' ? 60 : 40} />
    </>
  );
};
