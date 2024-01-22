import React, {useCallback, useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Toast from 'react-native-simple-toast';
import Space from '../../../../../components/Space';
import {Txt} from '../../../../../components/utils';
import {COLORS, SIZES} from '../../../../../theme';
import BankAcccounts from './components/Bank Acounts';
import CreditDebit from './components/Card debit';

import BottomSheetSelect from './BottomSheetSelect';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';

const TopUp = ({navigation, navigation: {goBack}, route}) => {
  const bottomSheetModalRef3 = useRef(null);

  const {data, ind} = route.params;

  const data1 = [
    {
      id: 0,
      label: 'Main Account',
      value: 'Main Account',
      price: '**** **** **** 3952',
      currency: '11 / 2022',
      url: require('../../../../../Assets/cartecredit.png'),
      disable: false,
    },
 
  ];

  const data2 = [
    {
      id: 0,
      label: 'Main Account',
      value: 'Main AccountBANK',
      price: 'OCBC BANK',
      currency: '8732 6920 8237 7201',
      url: require('../../../../../Assets/Img/bankAccounts.png'),
      disable: false,
    },
    
  ];

  const data3 = [
    {
      id: 0,
      label: 'Main Account',
      value: 'Main AccountBANK',
      price: 'OCBC BANK',
      currency: '8732 6920 8237 7201',
      url: require('../../../../../Assets/Img/icon24Wallet.png'),
      disable: false,
    },
 
  ];

  const SmileAccount = [
    {
      id: 0,
      label: 'Main Account',
      value: 'Main AccountBANK',
      price: 'OCBC BANK',
      currency: '8732 6920 8237 7201',
      url: require('../../../../../Assets/Img/smileAccount48.png'),
      disable: false,
    },
 
  ];


  const paysafeCard = [
    {
      id: 0,
      label: 'Main Account',
      value: 'Main AccountBANK',
      price: 'OCBC BANK',
      currency: '8732 6920 8237 7201',
      url: require('../../../../../Assets/Img/paysafecard.png'),
      disable: false,
    },
 
  ];

  const onSelect = item => {
    if (item.value == 'MTN' || item.value == 'Main Account') {
      navigation.navigate('AmountTopup', {item, data});
    } else {
      Toast.show(`Unavailable method`);
    }
  };

  const closeBottomUp3 = useCallback(() => {
    bottomSheetModalRef3.current.close();
  }, []);

  const handlePresentModalSelect = useCallback(() => {
    bottomSheetModalRef3.current?.present();
  }, []);


  return (
    <ReturnHeader
      title={'Payments'}
      goBack={() => {
        navigation.goBack();
      }}>
      <>
        <ScrollView
          contentContainerStyle={{width: SIZES.width}}
          showsVerticalScrollIndicator={false}>
          <View style={{padding: 20}}>
            <View style={styles.topinuptxt}>
              <Txt lineHeight={20} color={COLORS.slateGrey} fontSize={14}>
                You are topping up your{' '}
                <Txt Bold={'600'}>
                  {data.name == 'Main Account'
                    ? 'Smile Account'
                    : ind == 1
                    ? 'Tontine Account'
                    : ind == 2
                    ? 'PaysafeCard'
                    : 'Paypal'}{' '}
                </Txt>
                account in euro. Choose a top up method below:
              </Txt>
            </View>

            <CreditDebit
              title={'Credit / Debit Cards'}
              data={data1}
              onSelect={onSelect}
            />
            <Space space={20} />
            <BankAcccounts
              title={'Bank Accounts'}
              data={data2}
              onSelect={onSelect}
            />
            <Space space={20} />
            <BankAcccounts
              title={'E-wallets'}
              data={data3}
              onSelect={onSelect}
            />
            {ind < 3 
              ? null: (
                <>
                  <Space space={20} />

                  <BankAcccounts
                    title={'Smile account'}
                    data={SmileAccount}
                    onSelect={onSelect}
                  />
                </>
              )}
            <Space space={20} />

            <BankAcccounts
              title={'PaysafeCard'}
              data={paysafeCard}
              onSelect={onSelect}
            />
            {/* <BankAcccounts
              title={'Mobile payments'}
              data={data4}
              onSelect={onSelect}
            /> */}
            <Space space={120} />
          </View>
        </ScrollView>
      </>

      <BottomSheetSelect
        bottomSheetModalRef={bottomSheetModalRef3}
        onPress={handlePresentModalSelect}
        closeBottomUp2={closeBottomUp3}
      />
    </ReturnHeader>
  );
};
export default TopUp;

const styles = StyleSheet.create({
  topinuptxt: {
    padding: 20,
  },
});
