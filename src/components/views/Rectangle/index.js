import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../theme";

const Rectangle = ({ children, style, width,   elevation,radius }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          elevation: elevation ? elevation : 3,
          borderRadius:radius? radius : 8
        },
      ]}
      {...style}
    >
    <View style={{width:"100%" , flex:1}}>

      {children}
    </View>
    </View>
  );
};

export default Rectangle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignSelf: "center",
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    overflow:'hidden',
    
  },
});
