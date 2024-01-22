import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../theme';
import {StatusBar} from 'react-native';
import HeaderContent from './SecondaryHeader';
import ImgBack from '../../../Assets/Img/bg.png';
import Spiner from '../../spiner';

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
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={"transparent"} />
        <SafeAreaView style={styles.Box}>
          <Image
            style={styles.ImageBackground}
            source={ImgBack}
            resizeMode="contain"
          />
          <HeaderContent
            Cancel="Return"
            goBack={goBack}
            title={title}
            sousTitre={sousTitre}
            Notifications={Notifications}
            sousTontine={sousTontine}
            TextIn={TextIn}
          />
        </SafeAreaView>

        {Loading ? <Spiner /> : children}
      </View>
    </>
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
    height: 120,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: COLORS.blueGreen,
  },
  ImageBackground: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    position: 'absolute',
  },
});
