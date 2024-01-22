import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rectangle from '../../../../../../components/views/Rectangle';
import HView from '../../../../../../components/views/HView/HView';
import {
  PaleGreyButton,
  PrimaryLinearOption,
} from '../../../../../../components/Buttons';
import {COLORS} from '../../../../../../theme';
import { Txt } from '../../../../../../components/utils';
import Space from '../../../../../../components/Space';
const RenterConnectCarte = ({onPress, source, isLoading,phoneNumber, disabled}) => {
  return (
    <View
      elevation={0.2}
      title={'Wallet Connection'}
      swiper
      style={{
        backgroundColor: disabled ? COLORS.finished : '#FFF',
        marginTop: 20,
        paddingVertical: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 24,
        paddingHorizontal: 15,
        width: '99%',
        marginBottom: 2,
      }}
      radius={24}>
      <HView spaceBetween>
        <View style={{alignItems:"center",width:"30%" }}>

        <Image source={source}  />
        <Space space={3}></Space>
        <Txt color={COLORS.TextBody} fontSize={10} >{phoneNumber}</Txt>


        </View>
        <PaleGreyButton
          onPress={() => {
            if (!disabled) {
              onPress();
            } else {
              return;
            }
          }}
          width={'40%'}
          height={40}
          loading={isLoading}
          disable={disabled}
          >
          SEND
        </PaleGreyButton>
      </HView>
    </View>
  );
};

export default RenterConnectCarte;

const styles = StyleSheet.create({});
