import React from 'react';
import ImgBack from '../../../../Assets/Img/HomeBack.png';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {COLORS, SIZES} from '../../../../theme';
import Space from '../../../Space';
import Spiner from '../../../../components/spiner';

const WalletLayout = ({children, isLoading}) => {
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <SafeAreaView style={styles.container}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />

          <Image
            style={styles.ImageBackground}
            source={ImgBack}
            resizeMode="stretch"
          />
          <Space space={Platform.OS == 'android' ? 40 : 30} />
          {children}
        </SafeAreaView>
      )}
    </>
  );
};
export default WalletLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paleGrey,
  },
  ImageBackground: {
    width: SIZES.width,
    height: Platform.OS == 'android' ? 190 : 220,
    zIndex: 99,
    position: 'absolute',
    top: Platform.OS == 'android' ? -40 : -40,
  },
});
