import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../theme';
import {StatusBar} from 'react-native';
import HeaderContent from './SecondaryHeader';
import ImgBack from '../../../Assets/Img/bg.png';
import Spiner from '../../spiner';
import LinearGradient from 'react-native-linear-gradient';

const ReturnHeader = ({
  children,
  goBack,
  title,
  Loading,
  sousTitre,
  Notifications,
  sousTontine,
  TextIn,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.Box}>
        <ImageBackground
            style={styles.ImageBackground}
            source={ImgBack}
            resizeMode="contain"
          />

        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={[COLORS.Vert0, COLORS.Vert1]}
          style={styles.ImageBackground}>
          <HeaderContent
            Cancel="Return"
            goBack={goBack}
            title={title}
            sousTitre={sousTitre}
            Notifications={Notifications}
            sousTontine={sousTontine}
            TextIn={TextIn}
          />
        </LinearGradient>
      </SafeAreaView>

      {Loading ? <Spiner /> : children}
    </View>
  );
};

export default ReturnHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,

  },
  Box: {
    width: '100%',
    height: Platform.OS == 'ios' ? 120 : 120,
    overflow: 'hidden',
    backgroundColor: COLORS.blueGreen,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  ImageBackground: {
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // zIndex: 99,
    // position: 'absolute',
  },
});
