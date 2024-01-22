import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  View,
} from "react-native";

import ImgBack from "../../../../../Assets/Img/HomeBack.png";
import SecondaryHeader from "../../../../../components/Headers/root/SecondaryHeader";
import Space from "../../../../../components/Space";
import { COLORS, SIZES } from "../../../../../theme";
import { PaleGreyButton, PrimaryButtonLinear } from "../../../../../components/Buttons";
import CreatedSuccess from "../../../../../components/views/Layouts/AuthLayout/Model";
import { Head, Txt } from "../../../../../components/utils";
import HView from "../../../../../components/views/HView/HView";
import RenterCart from "./components/RenterCart";
import RenderDisconnectCarts from "./components/RenderDisconnectCarts";

const data = [
  {
    nameNumber: "+2873640923809",
    source: require("../../../../../Assets/Img/Ewallet.png"),
    balance:"89"

  },

 
  {
    nameNumber: "+2873640923809",
    source: require("../../../../../Assets/Img/Paypal.png"),
    balance:"209"
  },
  {
    nameNumber: "+2873640923809",
    source: require("../../../../../Assets/Img/Lydia.png"),
  },
  {
    nameNumber: "+2873640923809",
    source: require("../../../../../Assets/Img/wechat.png"),
  },
];
const BankAccounts = ({ navigation }) => {
  const bottomSheetModalRef2 = useRef(null);
  const handlePresentModalRemove = useCallback(() => {
    bottomSheetModalRef2.current?.present();
  }, []);
  const closeBottomUp2 = useCallback(() => {
    bottomSheetModalRef2.current.close();
  }, []);



  const [success, setsuccess] = useState(false);

  const onDissmis = useCallback(() => {
    setsuccess(false);
  }, []);
  const onSuccess = useCallback(() => {
    setsuccess(true);
  }, []);
 


  const [connected, setconnected] = useState(false)
const handlConnect = (second) => { setconnected(false) }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <Image
        style={styles.ImageBackground}
        source={ImgBack}
        resizeMode="stretch"
      />

      <>
        <SecondaryHeader
          goBack={() => {
            navigation.goBack();
          }}
          title={"E-Wallets Accounts"}
          sousTitre={`4 accounts connected`}
          Cancel="Return"
        />

        <View style={{flex:1 ,alignItems:"center",width:"100%" }}>

        <ScrollView
          contentContainerStyle={{ width: SIZES.width, alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <Space space={30} />


             {!connected ? (
            data.map((item, index) => {
              return (
                <View key={index} style={{width: '90%'}}>
                  <RenterCart item={item} onPress={()=>{return}} />
                </View>
              );
            })
            ) : (
            <RenderDisconnectCarts connect={handlConnect} />
          )}

        
          <Space space={40} />
    
        </ScrollView>
        <PrimaryButtonLinear
            width={"90%"}
            style={{ marginVertical: 10 }}
            disabled={true}
            textTransform="uppercase"

            onPress={()=>{
              // navigation.navigate('CreateAccount')
            }}
          >
            Connect a wallet
          </PrimaryButtonLinear>
        </View>

      </>
  

      <CreatedSuccess Visible={success} onDissmis={onDissmis}>
        {BodyModel ? <BodyModel onDissmis={onDissmis} /> : null}
      </CreatedSuccess>
    </SafeAreaView>
  );
};
export default BankAccounts;

const BodyModel = ({ onDissmis }) => {
  return (
    <View style={styles.ModelContainer}>
      {/* <Image source={illusphone} style={{ width: "100%" }} /> */}

      <Head
      //  fontFamily={"Poppins-Bold"}
        style={{ padding: 20, textAlign: "center" }}
      >
        Are you sure to remove this card?
      </Head>
      <Txt
        color={COLORS.slateGrey}
        style={{
          paddingHorizontal: 10,
          textAlign: "center",
          //fontFamily: "Poppins-SemiBold",
        }}
        fontSize={14}
      >
        You won’t be able to use it for Diaspo service anymore.
      </Txt>
      <Space space={20} />
      <HView width={"100"} spaceBetween>
        <PaleGreyButton width={"48%"} onPress={onDissmis}>
          cancel
        </PaleGreyButton>
        <PrimaryButtonLinear width={"48%"} disabled onPress={onDissmis}>
          remove
        </PrimaryButtonLinear>
      </HView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
    alignItems: "center",
    flex: 1,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    height: 130,
  },
});
