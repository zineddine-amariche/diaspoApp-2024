import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SecondaryHeader from '../../../components/Headers/root/SecondaryHeader';
import Space from '../../../components/Space';
import CodeQR from '../../../Assets/Img/QrCode/qrTrans.jpeg';
import {COLORS, SIZES} from '../../../theme';
import ImgBack from '../../../Assets/Img/HomeBack.png';

import {Head, Txt} from '../../../components/utils';
import HView from '../../../components/views/HView/HView';
import {PrimaryButtonLinear} from '../../../components/Buttons';
import {useSelector} from 'react-redux';

const MyCode = ({navigation}) => {
  const {informationsUser} = useSelector(state => state.userInformations);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground style={styles.ImageBackground} source={ImgBack} />

      <SecondaryHeader
        goBack={() => {
          navigation.goBack();
        }}
        title={'My QR Code'}
        Cancel="Return"
      />
      <Space space={20} />

      <ScrollView contentContainerStyle={{width: SIZES.width}}>
        <Space space={20} />
        <View
          style={{
            backgroundColor: COLORS.white,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 8,
            padding: 15,
            alignItems: 'center',
          }}>
          <Space space={20} />
          <Image source={CodeQR} style={{width: 170, height: 170}} />
          <Space space={20} />

          <Head color={COLORS.darkBlueGrey}>
            {informationsUser?.data?.walletAccountUser?.firstName}{' '}
            {informationsUser?.data?.walletAccountUser?.lastName}
          </Head>

          <Space space={20} />
          <HView>
            <PrimaryButtonLinear disabled={true} width="90%"
            onPress={()=>{
              navigation.navigate('Scann')
            }}
            >
              Scan
            </PrimaryButtonLinear>
          </HView>
        </View>
        <Space space={20} />
        <View style={{alignItems: 'center'}}>
          <Txt color={COLORS.coolGrey}>
            scan this code to pay{' '}
            <Txt color={COLORS.BlackModal}>
              {informationsUser?.data?.walletAccountUser?.firstName}{' '}
              {informationsUser?.data?.walletAccountUser?.lastName}
            </Txt>
          </Txt>
        </View>
        <Space space={160} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
    alignItems: 'center',
    flex: 1,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    borderBottomEndRadius: 15,
    overflow: 'hidden',
    borderBottomStartRadius: 15,
    height: 110,
  },
  buttonsConatiner: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    height: 110,
    paddingTop: 15,
  },
});
