import { StyleSheet } from "react-native";
import React from "react";
import BottomSheetTransfert from "./BottomSheetTransfert";

const Transfers = ({ navigation, navigation: { goBack } }) => {
  return <BottomSheetTransfert goBack={() => navigation.navigate("DiaspoBottomTab")} />;
};

export default Transfers;

const styles = StyleSheet.create({});
