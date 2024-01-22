import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Form from './components/Form';
import {COLORS} from '../../../theme';
import Space from '../../../components/Space';

const KycForm = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.blueGreenOpacity9,justifyContent:"space-between"}}>
      <Space space={40}/> 
      <Form />
    </View>
  );
};

export default KycForm;

const styles = StyleSheet.create({});
