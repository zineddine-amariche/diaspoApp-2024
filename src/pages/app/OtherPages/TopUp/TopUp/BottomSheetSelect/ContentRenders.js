import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HView from "../../../../../../components/views/HView/HView";
import { Head, Txt } from "../../../../../../components/utils";
import Space from "../../../../../../components/Space";
import {
  PaleGreyButton,
  PrimaryButton,
  PrimaryButtonLinear,
  WhiteButton,
} from "../../../../../../components/Buttons";
import { COLORS } from "../../../../../../theme";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import CreatedSuccess from "../../../../../../components/views/Layouts/AuthLayout/Model";
import { useCallback } from "react";
import illusphone from "../../../../../../Assets/Img/illusphone.png";

const ContentRenders = ({ onPress, ChangeAccount }) => {
  const [selected, setSelected] = useState(0);

  const [success, setsuccess] = useState(false);

  const onDissmis = useCallback(() => {
    setsuccess(false);
  }, []);

  const ShowCodeForm = () => {
    setSelected(1);
  };

  const ShowSucces = () => {
    setsuccess(true);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 16,
        }}
      >
        <Head style={styles.Head}>
          {selected === 0
            ? "SELECT PREPAID CARDS"
            : "Enter your card information"}
        </Head>
        <Space space={20} />
        <ScrollView>
          {selected === 0 ? <Form1 ShowCodeForm={ShowCodeForm} /> : <Form2 />}
        </ScrollView>
        <Space space={30} />
        {selected === 1 && (
          <>
            <PrimaryButton
              onPress={() => {
                // onPress();
                ShowSucces();
              }}
            >
              CONFIRM
            </PrimaryButton>
            <WhiteButton onPress={onPress}>CANCEL</WhiteButton>
          </>
        )}

        <Space space={90} />
      </View>

      <CreatedSuccess Visible={success} onDissmis={onDissmis}>
        {BodyModel ? (
          <BodyModel
            onDissmis={() => {
              onDissmis();
              onPress();
            }}
          />
        ) : null}
      </CreatedSuccess>
    </>
  );
};

export default ContentRenders;

const BodyModel = ({ onDissmis }) => {
  return (
    <>
      <View style={styles.ModelContainer}>
        <Image source={illusphone} style={{ width: "100%" }} />

        <Head
        //  fontFamily={"Poppins-Bold"}
          style={{ padding: 20, textAlign: "center" }}
        >
          Transfered successfully
        </Head>
        <Txt
          color={COLORS.slateGrey}
          style={{
            paddingHorizontal: 10,
            textAlign: "center",
            //fontFamily: "Poppins-SemiBold",
          }}
        >
          <Txt Bold={"700"} color={COLORS.black} fontSize={17}>
            12,000 euro
          </Txt>{" "}
          has been transfered successfully to
          <Txt Bold={"700"} color={COLORS.black} fontSize={17}>
            {" "}
            Faith Felicity (+44 7538 110953).
          </Txt>
          You can check in your account
          <Txt Bold={"400"} color={COLORS.orangeYellow} fontSize={17}>
            {" "}
            transaction history.
          </Txt>
          .
        </Txt>

        <PaleGreyButton onPress={onDissmis}>close</PaleGreyButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Head: {
    alignSelf: "center",
    paddingVertical: 10,
  },
});
