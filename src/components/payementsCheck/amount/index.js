import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Txt } from '../../utils';
import Space from '../../Space';
import { COLORS } from '../../../theme';

const AmountCard = ({amount,when}) => {
    return (
      <View
      style={{
        padding: 20,
      }}
      >
        <Txt fontSize={14} color={COLORS.coolGrey}>Amount</Txt>
        <Space space={5} />
        <Txt> £ {amount} </Txt>
        
        <Space space={10} />
  
        <Txt fontSize={14} color={COLORS.coolGrey}>When</Txt>
        <Space space={5} />
        <Txt>{when}</Txt>
      </View>
    );
  };

export default AmountCard

const styles = StyleSheet.create({})