import React from 'react';
import {TextInput, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {PrimaryButtonLinear} from '../../../../../../components/Buttons';
import Space from '../../../../../../components/Space';
import {Txt} from '../../../../../../components/utils';
import {COLORS} from '../../../../../../theme';
import {UseVoucher} from './useVoucher';

const VoucherInput = () => {
  const {
    codePart1Ref,
    codePart2Ref,
    codePart3Ref,
    codePart4Ref,
    handleCodePart1Change,
    handleCodePart2Change,
    handleCodePart3Change,
    handleCodePart4Change,
    handleCodePartKeyPress,
  } = UseVoucher();

  const {code1, code2, code3, code4} = useSelector(state => ({
    ...state.PaySafeCard,
  }));

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={codePart1Ref}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handleCodePart1Change}
            value={code1}
            autoFocus={true}
            onKeyPress={e => handleCodePartKeyPress(e, 'part1')}
          />
          <TextInput
            ref={codePart2Ref}
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handleCodePart2Change}
            onKeyPress={e => handleCodePartKeyPress(e, 'part2')}
            value={code2}
          />
          <TextInput
            ref={codePart3Ref}
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handleCodePart3Change}
            onKeyPress={e => handleCodePartKeyPress(e, 'part3')}
            value={code3}
          />
          <TextInput
            ref={codePart4Ref}
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handleCodePart4Change}
            onKeyPress={e => handleCodePartKeyPress(e, 'part4')}
            value={code4}
          />
        </View>
        <Space space={Platform.OS == 'android' ? 30 : 60} />
        <Txt color={COLORS.TextBody}>Choose your voucher</Txt>
        <Space space={20} />
        <TouchableOpacity>

        <Txt
          style={{
            textDecorationLine: 'underline',
          }}>
         Choose a voucher
        </Txt>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    flex: 1,
    height: 40,
  },
});

export default VoucherInput;
