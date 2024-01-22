import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rectangle from '../../../../../../../components/views/Rectangle';
import Space from '../../../../../../../components/Space';
import Credit from '../../../../../../../Assets/Img/creditCards.png';
import Bank from '../../../../../../../Assets/Img/bankAccounts.png';
import iconScan from '../../../../../../../Assets/Img/visa.png';
import EWallet from '../../../../../../../Assets/Img/icon24Wallet.png';
import RenderItemsWalletConnection from './RenderItems';

const data = [
   {
     date: ' 2 Scan function',
     T2: 'Visa scan / QR CODE',
     source: iconScan,
    //  to: 'Scann',
     to: 'MyCode',

     
     disable: false,
   },
   {
    date: '1 e-wallet account connected',
    T2: 'MTN Account',
    source: EWallet,
    to: 'EWalletAccounts',
    disable: false,
  },
   {
     date: '2 cards connected',
     T2: 'Wave account',
     source: Credit,
     to: 'CreditsCards',
     disable: true,
   },
   {
     date: '5 bank accounts connected',
     T2: 'Paypal account',
     source: Bank,
     to: 'BankAccounts',
     disable: true,
   },
   {
    date: '5 bank accounts connected',
    T2: 'Orange Money account',
    source: Bank,
    to: 'BankAccounts',
    disable: true,
  },
  {
    date: '5 bank accounts connected',
    T2: 'Vodacom account',
    source: Bank,
    to: 'BankAccounts',
    disable: true,
  },

];
const SelectAccount = ({
  navigation,
  checked,
  setchecked,
  setNavigationCashOut,
}) => {
  // const ChangeCheck = (value) => {
  //   setchecked(value);
  // };

  return (
    <View style={{backgroundColor: '#FFF', paddingHorizontal: 20,marginTop:10}}>
      {data.map((i, index) => {
        return (
          <View key={index}>
            <RenderItemsWalletConnection
              disable={i.disable}
              T2={i.T2}
              date={i.date}
              source={i.source}
              index={index}
              lenght={data?.length}
              item={i}
              navigation={navigation}
              checked={checked}
              ChangeCheck={value => {
                setchecked(value);
                setNavigationCashOut(i.to);
              }}
            />
          </View>
        );
      })}
      <Space space={20} />
    </View>
  );
};

export default SelectAccount;

const styles = StyleSheet.create({});
