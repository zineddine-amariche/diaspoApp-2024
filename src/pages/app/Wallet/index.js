import {Platform, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import WalletLayout from '../../../components/views/Layouts/AppLayout/walletLayout';
import Space from '../../../components/Space';
import WalletHead from '../../../components/Headers/root/WalletHeader';
import WalletConnection from './Components/1 - WalletConnection';
import {UseWallets} from './Hooks';
import {useIsFocused} from '@react-navigation/native';
import {getTontines} from '../../../redux/Features/Tontine/ManageTontine/Slices/tontineSlice';
import {useSelector} from 'react-redux';

const Wallet = ({navigation}) => {
  const isFocused = useIsFocused();

  const {isLoading} = useSelector(state => ({
    ...state.tontines,
  }));

  const {object, dispatch} = UseWallets();

  useEffect(() => {
    dispatch(getTontines(object));
  }, [isFocused]);

  return (
    <WalletLayout isLoading={isLoading}>
      <WalletHead
        title={'My registered payment methods'}
        openDrawer={() => navigation.toggleDrawer()}
      />

      <ScrollView contentContainerStyle={{}}>
        {Platform.OS == 'os' && <Space space={90} />}
        {Platform.OS !== 'os' && <Space space={50} />}

        <WalletConnection navigation={navigation} />
        <Space space={110} />
      </ScrollView>
    </WalletLayout>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
