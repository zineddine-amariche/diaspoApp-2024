import { Image, StyleSheet, View } from "react-native";
import React from "react";
import HView from "../HView/HView";
import { COLORS } from "../../../theme";
import { Txt } from "../../utils";
import up from '../../../Assets/home/up.png'
import down from '../../../Assets/home/down.png'

const RectangleItem = ({ T1, T2, T3, Price, date,colors,check }) => {

  const RenderImage = ()=>{
    return <Image style={{marginLeft:10}} source={check ? up : down} />
  }
  return (
    <HView
      spaceBetween
      style={{
        backgroundColor: COLORS.paleGreyTwo,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 6,
        marginVertical: 5,
      }}
    >
      <View style={{ width: "70%" }}>
        <HView style={{marginVertical:3}}>
          <Txt numberOfLines={1} color={COLORS.slateGrey}>
            {T1} <Txt color={COLORS.dark}>{T2}</Txt>
          </Txt>
        </HView>
        <View>
          {T3 && <Txt color={COLORS.dark}>Service</Txt>}
          <Txt color={COLORS.coolGrey}>{date}</Txt>
        </View>
      </View>
      <View style={{flexDirection:"row" ,alignItems:'center'}}>
        <Txt
          fontSize={17}
          color={colors}
          Bold="700"
        >
          {Price}
        </Txt>
        <RenderImage />
      </View>
    </HView>
  );
};

export default RectangleItem;

const styles = StyleSheet.create({});
