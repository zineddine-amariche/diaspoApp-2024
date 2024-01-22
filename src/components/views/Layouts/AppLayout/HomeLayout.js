import React, {useEffect, useRef, useState} from 'react';
import ImgBack from '../../../../Assets/Img/HomeBack.png';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../../../../theme';
import {Modalize} from 'react-native-modalize';
import {useSelector} from 'react-redux';
import FullModel from '../../../Models/FullModel';
import {Txt} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import Space from '../../../Space';
import SquareCheckBox from '../../../checkBox/useSquareCheck';
import { WhiteButton } from '../../../Buttons';

let options = [
  {
    name: 'Europ',
    value: 'europ',
    isCheck: false,
  },
  {
    name: 'Afric',
    value: 'afric',
    isCheck: false,
  },
];
const HomeLayout = ({children}) => {
  const modalRef = useRef(null);

  const {version} = useSelector(state => state.App);

  const onOpen = () => {
    modalRef.current?.open();
  };

  useEffect(() => {
    if (!version) {
      onOpen();
    }
  }, [version]);


  const [isChecked, setisChecked] = useState("")

  console.log('isChecked', isChecked)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <Image
        style={styles.ImageBackground}
        source={ImgBack}
        resizeMode="stretch"
      />

      {children}

      <FullModel Visible={false}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={[COLORS.dirtyBlue, COLORS.lightNavy]}
          style={{flex: 1}}>
          <View
            style={{
              backgroundColor: COLORS.blueGreenOpacity5,
              flex: 1,
              paddingTop: 100,
              padding: 30,
            }}>
            <Txt
              lineHeight={30}
              fontSize={24}
              style={{color: '#FFF'}}
              Bold={'600'}>
              Please choose your version to continue using Diaspo.
            </Txt>
            <Space space={20} />

            {options.map((i, index) => {
              console.log('i.value', i.value)
              return (
                <SquareCheckBox
                  title={i.name}
                  checked={isChecked == i.value ? true : false}
                  key={index}
                  onPress={()=>{
                    setisChecked(i.value)
                  }}
                  color={COLORS.white}
                  fontSize={20}
                  borderWidth={1}
                  borderColor={COLORS.white}
                  size={25}
                  backgroundColor={"#FEE"}
                />
              );
            })}
          </View>
          <WhiteButton width={"100%"} style={{alignSelf:'center',  padding:30}}>
            next
          </WhiteButton>
          <Space space={20} />
        </LinearGradient>
      </FullModel>
    </SafeAreaView>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paleGrey,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
  },
});

const ContentRenders = () => {
  return <></>;
};
