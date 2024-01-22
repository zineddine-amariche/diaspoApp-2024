import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import background from "../../../Assets/Img/background2.png";
import logo from "../../../Assets/Img/logo.png";
import { Txt } from "../../../components/utils";
import { COLORS } from "../../../theme";


const SplashScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />

      <ImageBackground
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        source={background}
        resizeMode="cover"
      />
      <Image source={logo} style={styles.image} />
      <Txt color={COLORS.yellow} style={styles.text}>
        © Diaspora Community
      </Txt>
      <View  style={{ position: "absolute" , bottom:120 }}>
        <ActivityIndicator
         
          size={30}
          color={COLORS.white}
        ></ActivityIndicator>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    bottom: 35,
  },
  image: {
    marginBottom: 150,
  },
});
