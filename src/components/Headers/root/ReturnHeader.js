import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../../theme";
import HeaderContent from "./SecondaryHeader";
import ImgBack from "../../../Assets/Img/bg.png";
import Spiner from "../../spiner";

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
  );
};

export default ReturnHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  Box: {
    width: "100%",
    height: Platform.OS == "ios" ? 120 : 120,
    overflow: "hidden",
    backgroundColor: COLORS.blueGreen,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
});
