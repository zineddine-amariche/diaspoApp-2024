import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../theme';
import {Txt} from '../../utils';
import CheckInfo from '../checkInfo';
import AmountCard from '../amount';
import {useAmoutTopup} from '../../../pages/app/OtherPages/TopUp/TopUp/pages/AmountTopup/Hooks/useAmountTopup';
import {useSelector} from 'react-redux';
import {PrimaryButtonLinear} from '../../Buttons';

const RenderCheckEWallet = ({submitMtn}) => {
  const {onSubmit} = useAmoutTopup();
  const {isLoading} = useSelector(state => state.transaction);
  const {amount} = useSelector(state => state.transaction);
  const {informationsUser} = useSelector(state => state.userInformations);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: COLORS.finished,
          height: 50,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Txt color={COLORS.BlackModal} Bold={'700'}>
          Check and confirm
        </Txt>
      </View>
      <CheckInfo
        From={'From'}
        name={`${informationsUser?.data?.walletAccountUser?.firstName} ${informationsUser?.data?.walletAccountUser?.lastName}`}
        number={'099029093039030'}
        type={'Reward'}
      />

      {/* <CheckInfo
        From={'To'}
        name={'Z Meera NK'}
        number={'9999Z000S00082'}
        type={'Instant Saver'}
      /> */}

      <AmountCard amount={amount} when="Now" />

      <View style={styles.containerButtonCheck}>
        <PrimaryButtonLinear
          width={'100%'}
          onPress={() => {
            submitMtn();
            // console.log('Object', Object)
          }}
          disabled={true}
          loading={isLoading}>
          Validate
        </PrimaryButtonLinear>
      </View>
    </ScrollView>
  );
};

export default RenderCheckEWallet;

const styles = StyleSheet.create({
  containerButtonCheck: {
    padding: 20,
  },
});
