import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Rectangle from "../../../../../components/views/Rectangle";
import Space from "../../../../../components/Space";
import { Txt } from "../../../../../components/utils";
import { COLORS } from "../../../../../theme";
import RenderItemsWalletConnection from "./components/RenderItems";
import Credit from "../../../../../Assets/Img/creditCards.png";
import Bank from "../../../../../Assets/Img/bankAccounts.png";
import EWallet from "../../../../../Assets/Img/icon24Wallet.png";
import Tontines from "../../../../../Assets/Img/tont.jpeg";
import Tontiness from "../../../../../Assets/Img/prepaid.png";
import bankCards from "../../../../../Assets/Img/bakso.jpeg";

const data = [
  {
    date: "Linked to your Bongo Account",
    T2: "VISA Virtual Prepaid Card ",
    source: Credit,
    to: "CreditsCards",
  },
  {
    date: "Linked to your Second Account",
    T2: "VISA Physical Prepaid Card ",
    source: Tontiness,
    to: "CreditsCards",
  },
  {
    date: "View your balance on Wave or MTN",
    T2: "E-wallet Account",
    source: EWallet,
    to: "BankAccounts",
  },
  {
    date: `See your registered Bank Account linked to ${"\n"}your Bongo Account`,
    T2: "Bank Account ",
    source: Bank,
    to: "CreditsCardsBankAccounts",
  },
 
  {
    date: "See your registered card",
    T2: "Tontine",
    source: Tontines,
    to: "CreditsCardsTontine",
  },
   
  {
    date: "See your registered bank cards",
    T2: "Bank Cards ",
    source: bankCards,
    to: "BankCards",
  },
];






{/* <Rectangle
elevation={0.2}
style={{
  paddingVertical: 10,
  paddingHorizontal: 20,
  width: '90%',
}}>
<Txt
  color={COLORS.blueGreen}
  fontSize={17}
  style={{marginBottom: 8}}>
  Tontines
</Txt>

<TouchableOpacity
  style={{
    paddingVertical: 10,
    backgroundColor: COLORS.paleGreyTwo,
  }}
  onPress={()=>{
    navigation.navigate('CreditsCardsTontine')
  }}
  >
  <Txt
    fontSize={14}
    color={COLORS.darkBlueGrey}
    style={{marginLeft: 10}}>
    See your registred card
  </Txt>
</TouchableOpacity>
</Rectangle>
<Space space={70} /> */}



const WalletConnection = ({ navigation }) => {
  return (
    <Rectangle
      elevation={0.2}
      title={"Wallet Connection"}
      swiper
      style={{ paddingVertical: 10, width: "90%" }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Space />
        <Txt
          color={COLORS.blueGreen}
          fontSize={17}
        //  fontFamily="Poppins-Bold"
          style={{ paddingBottom: 10 }}
        >
          {"Registered payment methods"}
        </Txt>

        {data.map((i, index) => {
          return (
            <View key={index}>
              <RenderItemsWalletConnection
                T2={i.T2}
                date={i.date}
                source={i.source}
                index={index}
                lenght={data?.length}
                item={i}
                navigation={navigation}
              />
            </View>
          );
        })}
        {/* 
        <RenderItemsWalletConnection
          T2={"Melicia Diya"}
          T3={"chargerd"}
          date={"5 bank accounts connected"}
          Price={"+ £1,300"}
          source={Bank}
        />

        <RenderItemsWalletConnection
          T1={"Charged for "}
          T2={"Melicia Diya"}
          T3={"chargerd"}
          date={"29 Jan 2020"}
          Price={"+ £1,300"}
          source={EWallet}
        /> */}
      </View>
    </Rectangle>
  );
};

export default WalletConnection;

const styles = StyleSheet.create({});
