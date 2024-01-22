import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';
import {COLORS} from '../../../../../theme';
import ReturnHeader from '../../../../Headers/root/ReturnHeader';
import Spiner from '../../../../spiner';
import {Txt} from '../../../../utils';

const ScreensLayout = ({children, Loading, opacity, onPress, existData}) => {
  return (
    <View style={styles.container}>
      <ReturnHeader
        goBack={onPress}
        title={'Review of information'}
        Cancel="Return">
        {Loading ? <Spiner /> : existData ? children : <NoInformation />}
      </ReturnHeader>
    </View>
  );
};

export default ScreensLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paleGrey,
  },
});

const NoInformation = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Txt>No Review Infomations</Txt>
    </View>
  );
};
