import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Txt } from '../../utils';
import { COLORS } from '../../../theme';
import Space from '../../Space';

const CheckInfo = ({From, name, number, type}) => {
    return (
      <>
        <View
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.finished,
          }}>
          <Txt fontSize={14} color={COLORS.coolGrey}>
            {From}
          </Txt>
          <Space space={5} />
          <Txt fontSize={16} color={COLORS.BlackModal} Bold={'600'}>
            {name}
          </Txt>
          {/* <Txt fontSize={14} color={COLORS.coolGrey}>
            {number}
          </Txt> */}
          {/* <Txt fontSize={14} color={COLORS.coolGrey}>
            {type}
          </Txt> */}
        </View>
      </>
    );
  };

export default CheckInfo

const styles = StyleSheet.create({})