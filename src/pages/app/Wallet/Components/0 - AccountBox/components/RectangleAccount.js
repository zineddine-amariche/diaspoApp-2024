import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import icon24MoreDefault from "../../../../../../Assets/Img/icon24MoreDefault.png";
import { Txt } from "../../../../../../components/utils";
import HView from "../../../../../../components/views/HView/HView";
import { COLORS } from "../../../../../../theme";

const AccountsBox = ({ title, onPress, Change , price,item,handlePresentModalPress }) => {
  return (
    <View style={styles.container}>
      <HView spaceBetween>
        <View style={{marginRight:29}}>
          <HView>
            <View style={styles.Point}></View>
            <Txt fontSize={17} color={COLORS.orangeYellow}>
              {Change ? Change : item?.name}
            </Txt>
          </HView>
          <HView>
            <Txt
              color={COLORS.blueGreen}
              style={{ lineHeight: 40, fontSize: 32 }}
            >
              {price ? price : item?.price}{" "}
            </Txt>
            <Txt
              color={COLORS.greyblue}
              style={{ lineHeight: 24, fontSize: 17 }}
            >
              euro
            </Txt>
          </HView>
        </View>

        <TouchableOpacity
           onPress={handlePresentModalPress}
          // onPress={()=>{
          //   console.log('item', item)
          // }}
           >
          <View style={styles.Box}>
            <Image source={icon24MoreDefault} />
          </View>
        </TouchableOpacity>
      </HView>
      <View></View>
    </View>
  );
};

export default AccountsBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
    zIndex: -1,
    marginTop:20,
    marginLeft:20
  },
  Box: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.paleGrey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  Point: {
    height: 7,
    width: 7,
    borderRadius: 8,
    backgroundColor: COLORS.orangeYellow,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginTop: 3,
  },
});
