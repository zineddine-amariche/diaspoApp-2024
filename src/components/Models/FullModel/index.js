import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import ModelFullHeight from "../M-1/ModelFullHeight";
// import BlackModal from "../../../../Models/M-1/blackModal";

const FullModel = ({ Visible, onDissmis, children ,padding }) => {
  return (
    <ModelFullHeight padding={padding} transparent visible={Visible} onDissmis={onDissmis}>
    {children}
    </ModelFullHeight>
  );
};

const styles = StyleSheet.create({
  ModelContainer: {},
});

export default FullModel;
