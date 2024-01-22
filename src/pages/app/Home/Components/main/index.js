import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Txt } from "../../../../../components/utils";
import ctangleCustom from "../../../../../Assets/home/cashin.png";
import transfer from "../../../../../Assets/home/transfer.png";
import { COLORS } from "../../../../../theme";
import Tontine from "../../../../../Assets/home/Shape.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const MainTypes = ({ navigation, onPress }) => {
  const { t, i18n } = useTranslation();

  const navtopage = (path) => {
    navigation.navigate(path);
  };

  const { walletAccount } = useSelector((state) => state.walletAccounts);

  const Filter = walletAccount?.walletAccounts?.filter((item) => {
    return item.accountType.includes("personal");
  });

  return (
    <View style={styles.Types}>
      <TouchableOpacity
        onPress={() => {
          onPress("cashin");
        }}
        style={styles.Box}
      >
        <Image source={ctangleCustom} style={{}} />
        <Txt
          Bold={"700"}
          fontSize={16}
          color={COLORS.blueGreen}
          style={{ paddingTop: 10 }}
        >
          {t("Home.main_account_box.title2")}
        </Txt>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navtopage("Tontine");
          // navtopage("Test");
        }}
        style={[styles.Box, { backgroundColor: COLORS.orangeYellow }]}
      >
        <View
          style={{
            height: 44,
            width: 44,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={Tontine}
            style={{ backgroundColor: COLORS.orangeYellow }}
          />
        </View>
        <Txt
          Bold={"700"}
          fontSize={16}
          color={COLORS.white}
          style={{ paddingTop: 10 }}
        >
          {t("Home.main_account_box.title1")}
        </Txt>
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() => {
           navtopage("ChooseTransferMode");
          // onPress('cashout');
        }}
        style={styles.Box}>
        <Image source={cashOut} style={{height: 56, width: 56}} />
        <Txt
          fontSize={14}
          color={COLORS.lightBlueGrey}
          style={{paddingTop: 10}}>
          {t('Home.main_account_box.title3')}
        </Txt>
      </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => {
          //  navtopage('Transfer');
          // navtopage('Request');
          // onPress('transfer');
          navtopage("ChooseTransferMode");
        }}
        style={styles.Box}
      >
        <Image source={transfer} style={{}} />
        <Txt
          Bold={"700"}
          fontSize={16}
          color={COLORS.blueGreen}
          style={{ paddingTop: 10 }}
        >
          {t("Home.main_account_box.title4")}
        </Txt>
      </TouchableOpacity>
    </View>
  );
};

export default MainTypes;

const styles = StyleSheet.create({
  Types: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-evenly",
    paddingHorizontal: 5,
    width: "100%",
  },
  Box: {
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "28%",
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 4,
  },
});
