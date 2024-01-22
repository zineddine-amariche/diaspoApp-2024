

import { ImageBackground } from "react-native";
import { SafeAreaView, StatusBar } from "react-native";
import SecondaryHeader from "../../../components/Headers/root/SecondaryHeader";
import Space from "../../../components/Space";
import { COLORS, SIZES } from "../../../theme";
import ImgBack from "../../../Assets/Img/HomeBack.png";
import { PrimaryButtonLinear } from "../../../components/Buttons";
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


const Discount = ({ navigation }) => {

 


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <ImageBackground style={styles.ImageBackground} source={ImgBack} />

      <SecondaryHeader
        goBack={() => {
          navigation.goBack();
        }}
        title={"Test Page"}
        Cancel="Return"
      />
      <Space space={20} />
      <View style={styles.buttonsConatiner}>
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            navigation.navigate("BenefeciareListReorder");
          }}
        >
          MyCode
        </PrimaryButtonLinear>
        <Space space={25} />
        {/* <Line color={COLORS.black} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
    alignItems: "center",
    flex: 1,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    borderBottomEndRadius: 15,
    overflow: "hidden",
    borderBottomStartRadius: 15,
    height: 110,
  },
  buttonsConatiner: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    height: 110,
    paddingTop: 15,
    flex: 1,
  },
  
});
