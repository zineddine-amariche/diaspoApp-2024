import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Rectangle from "../../../../../components/views/Rectangle-Home";
import RectangleItem from "../../../../../components/views/Rectangle-Home-Item";
import Space from "../../../../../components/Space";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { COLORS } from "../../../../../theme";
import HView from "../../../../../components/views/HView/HView";
import { Txt } from "../../../../../components/utils";




const Recent = ({ onPress }) => {
  const { t, i18n } = useTranslation();


  let dta =[
    {
      datetime:"",
      type:'DEBIT',
      description:'Transfer to User One',
      amount:"14000"
    },
    {
      datetime:"",
      type:'NODEBIT',
      description:'Transfer to User One',
      amount:"3000"
    },
    {
      datetime:"",
      type:'NODEBIT',
      description:'Transfer to User One',
      amount:"7900"
    }
  ]

  const { transactions } = useSelector((state) => state.getAllTransactions);
  let SliceData = transactions?.length
    ? transactions[0]?.walletAccountTransactions?.slice(0, 3)
    : [];


  return (
    <View
      title={t("Home.recent_box.title")}
      swiper
      onPress={onPress}
      style={styles.RecentTransaction}
    >
      <HView spaceBetween style={{ paddingTop: 20, paddingHorizontal: 20 }}>
        <Txt
          color={COLORS.blueGreen}
          fontSize={17}
          // fontFamily="Poppins-Bold"
          style={{ paddingBottom: -5 }}
        >
          {t("Home.recent_box.title")}
        </Txt>
        <Space />

        {!SliceData?.length ? (
          <TouchableOpacity onPress={()=>{}}>
            <HView>
              <Txt
                color={COLORS.orangeYellow}
                style={{ marginRight: 2, marginBottom: 5 }}
                fontSize={12}
              >
                View all >>
              </Txt>
            </HView>
          </TouchableOpacity>
        ) : null}
      </HView>
      <Space space={20} />
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        {SliceData?.length ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Txt
              color={COLORS.orangeYellow}
              style={{ marginRight: 2, marginBottom: 5 }}
              fontSize={12}
            >
              No data
            </Txt>
          </View>
        ) : (
          dta.map((i, index) => {
            const date = new Date(i.datetime * 1000);
            let price =
              i.type == "DEBIT"
                ? `${i?.amount / 100} ${" $"}`
                : `${i?.amount / 100} ${" $"} `;
            let colors =
              i.type == "DEBIT" ? COLORS.peachyPink : COLORS.greenishTeal;
            return (
              <View key={index}>
                <RectangleItem
                  keys={index}
                  T1={i.description}
                  T3={""}
                  date={date.toDateString()}
                  Price={price}
                  colors={colors}
                  check={i.type == 'DEBIT'?false :true}
                />
              </View>
            );
          })
        )}
      </View>
      <Space space={20} />
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  RecentTransaction: {
    backgroundColor: COLORS.white,
    width: "93%",
    alignSelf: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 5,
    zIndex: -1,
    overflow: "hidden",
  },
});
