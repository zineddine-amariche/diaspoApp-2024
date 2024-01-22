import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rectangle from '../../../../../components/views/Rectangle';
import Space from '../../../../../components/Space';
import {Txt} from '../../../../../components/utils';
import {COLORS} from '../../../../../theme';
import RenderItemsWalletConnection from './components/RenderItems';
import Credit from '../../../../../Assets/Img/creditCards.png';
import Bank from '../../../../../Assets/Img/bankAccounts.png';
import EWallet from '../../../../../Assets/Img/icon24Wallet.png';
import Tontines from '../../../../../Assets/Img/tont.jpeg';
import Tontiness from '../../../../../Assets/Img/prepaid.png';
import bankCards from '../../../../../Assets/Img/bakso.jpeg';

const data = [
  {
    date: 'Linked to your Smile Account',
    T2: 'Moneytrans Virtual Card ',
    source: Credit,
    to: 'CreditsCards',
  },
  {
    date: 'Linked to your Smile Account',
    T2: 'Moneytrans Physical Card ',
    source: Tontiness,
    to: 'CreditsCards',
  },
  {
    date: '4 e-wallet account connected',
    T2: 'E-wallet Accounts',
    source: EWallet,
    to: 'BankAccounts',
  },
  {
    date: `See your registered Bank Account linked to ${'\n'}your Smile Account`,
    T2: 'Bank Accounts ',
    source: Bank,
    to: 'CreditsCardsBankAccounts',
  },
  {
    date: 'See your registered card',
    T2: 'Tontine',
    source: Tontines,
    to: 'CreditsCardsTontine',
  },
];

const WalletConnection = ({navigation}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 16,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
      }}>
      <Space />
      <Txt color={COLORS.blueGreen} fontSize={17} style={{paddingBottom: 10}}>
        {'Registered payment methods'}
      </Txt>

      {data.map((i, index) => {
        return (
          <View key={index}>
            <RenderItemsWalletConnection
              T2={i.T2}
              date={i.date}
              source={i.source}
              index={index}
              lenght={data?.length}
              item={i}
              navigation={navigation}
            />
          </View>
        );
      })}
    </View>
  );
};

export default WalletConnection;

const styles = StyleSheet.create({});
 