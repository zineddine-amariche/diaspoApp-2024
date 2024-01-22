import { Pressable, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import check2 from "../../Assets/Img/icon24Checked.png";

import { COLORS } from "../../theme";
import { Txt } from "../utils";
const SquareCheckBox = ({
  checked,
  onPress,
  title,
  style,
  size,
  borderWidth,
  fontSize,
  color,
  borderColor,
  backgroundColor
  
}) => {
  console.log('checked', checked)
  console.log('borderWidth', borderWidth)
  console.log('first', borderColor)
  return (
    <TouchableOpacity style={styles.container} {...style} onPress={onPress}>
      {checked ? (
        <TouchableOpacity onPress={onPress}
        // style={styles.box}
        style={{
          maxHeight: size || 15,
          width: size || 15,
          backgroundColor:  "#eee",
          borderWidth: borderWidth || 1.5,
          borderColor:borderColor?borderColor: COLORS.greyblue,
        }}
        >
        
            <Image source={check2}  resizeMode="contain" style={{height:"100%" ,width:"100%"}}  />
      
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}
        style={styles.box}
        >

        <View
          style={{
            minHeight: size || 15,
            width: size || 15,
            backgroundColor: backgroundColor?backgroundColor:"#eee",
            borderWidth: borderWidth || 1.5,
            borderColor:borderColor?borderColor: COLORS.greyblue,
            margin:6,
          }}
        />
        </TouchableOpacity>

      )}

      <Txt color={color?color:COLORS.darkBlueGrey} style={styles.title} lineHeight={35}  fontSize={fontSize?fontSize:14}>
        {title}
      </Txt>
    </TouchableOpacity>
  );
};

export default SquareCheckBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginTop:10
  },
  title: {
    marginLeft: 10,
  },
  box:{
    width:25,
    height:25,
    alignItems:"center",
    justifyContent:'center',
  
 
  }
});
