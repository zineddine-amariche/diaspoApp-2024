import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "react-native";
import ImgBack from "../../../Assets/Img/HomeBack.png";
import { COLORS, SIZES } from "../../../theme";
import { Txt } from "../../../components/utils";
import SecondaryHeader from "../../../components/Headers/root/SecondaryHeader";
import Space from "../../../components/Space";
import aboutDiaspo from "../../../Assets/Img/aboutDiaspo.png";

const AboutDiaspora = ({ navigation }) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.paleGrey, flex: 1 }}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <Image
        style={styles.ImageBackground}
        source={ImgBack}
        resizeMode="stretch"
      />
      <SecondaryHeader
        goBack={() => {
          navigation.navigate("Home");
        }}
        title={"About Diaspo"}
        Cancel="return"
      />
      <>
        <Space space={20} />

        <ScrollView
          ref={(scrollView) => (scrollView = scrollView)}
          scrollEnabled={scrollEnabled}
          style={styles.container}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={aboutDiaspo}
                style={styles.Img}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Space s/>
            <View style={{ paddingTop: 10, paddingBottom: 20 }}>
              <Txt
                fontSize={17}
                color={COLORS.darkBlueGrey}
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                  lineHeight: 24,
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </Txt>

              <Txt fontSize={12} color={COLORS.darkSkyBlue}>
                Ut enim ad minima veniam
              </Txt>
            </View>
            <View>
              <Txt
                fontSize={14}
                color={COLORS.slateGrey}
                style={{ lineHeight: 20 }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. {"\n"} {"\n"}
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. {"\n"} {"\n"}
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur
              </Txt>
            </View>
          </View>

          <Space space={20} />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default AboutDiaspora;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
  },

  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    height: 110,
  },
  Img: {
    width: "100%",
    borderRadius: 10,
  },
});
