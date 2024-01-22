import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryHead from "../../../components/Headers/root/PrimaryHead";
import Main from "./Components/main";
import WalletsList from "../../../components/views/Rectangle-Price";
import Recent from "./Components/Recent";
import HomeLayout from "../../../components/views/Layouts/AppLayout/HomeLayout";
import Space from "../../../components/Space";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { walletAccounts } from "../../../redux/Features/WalletAccount/Slice";
import { updateNotify } from "../../../redux/Features/Tontine/Participants/updateUserNotify/slice";
import { getUserInformations } from "../../../redux/Features/authentification/User_informations/slice";
import Spiner from "../../../components/spiner";
import { useIsFocused } from "@react-navigation/native";
import { UseHome } from "./Hooks/useHooks";
import { Modalize } from "react-native-modalize";
import { COLORS, SIZES } from "../../../theme";
import ContentRenders from "./Components/renderItems/ContentRenders";
import { getAllTransactions } from "../../../redux/Features/Transactions/Slice";
import { PrimaryButton, YellowButton } from "../../../components/Buttons";
import HView from "../../../components/views/HView/HView";
import { Txt } from "../../../components/utils";
import CreatedSuccess from "../../../components/views/Layouts/AuthLayout/Model";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const modalRef = useRef(null);

  const { object, objectUpdate, objectWallet, heightBottomSheet } = UseHome();

  const { informationsUser, isLoading: loader } = useSelector(
    (state) => state.userInformations
  );
  const { isLoading, accountId } = useSelector((state) => state.walletAccounts);

  const { user } = useSelector((state) => ({
    ...state.auth,
  }));

  let token = user?.AccessToken;
  let userId = user?.userId;

  const handleCloseModal = () => {
    setTimeout(() => {
      modalRef.current?.close();
    }, 400);
  };

  const nav = (to, data) => {
    handleCloseModal();
    navigation.navigate(to, data);
  };

  let obje = {
    accountId,
    userId,
  };

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onErrorAction = () => {
    console.log("error");
  };

  const navHistoryTransaction = () => {
    navigation.navigate("HistoryTransaction", { info: obje });
  };

  let title = `Welcome ${informationsUser?.data?.walletAccountUser?.firstName} ${informationsUser?.data?.walletAccountUser?.lastName}`;

  useEffect(() => {
    dispatch(updateNotify(objectUpdate));
  }, [objectUpdate.data.deviceToken, objectUpdate.data.deviceOs]);

  useEffect(() => {
    if (userId && token) {
      dispatch(walletAccounts(objectWallet));
    }
  }, [token, userId, isFocused]);

  useEffect(() => {
    let object = {
      accountId,
      userId,
      onErrorAction,
    };
    if (accountId) {
      dispatch(getAllTransactions(object));
    }
  }, [accountId, isFocused]);

  useEffect(() => {
    let objec = {
      userId: object.userId,
      onErrorAction: object.onErrorAction,
    };
    dispatch(getUserInformations(objec));
  }, [isFocused, token]);

  const [visible, setvisible] = useState(false);
  const [selectedAccountName, setselectedAccountName] = useState(null)

  const onDissmis = useCallback(() => {
    setvisible(false);
  }, []);
  const onSelectAccount = useCallback((item) => {
    setvisible(true);
    setselectedAccountName(item)
  }, []);

  return (
    <>
      {isLoading || loader ? (
        <Spiner />
      ) : (
        <HomeLayout>
          <PrimaryHead
            title={title}
            openDrawer={() => navigation.toggleDrawer()}
            navigation={() => navigation.navigate("Notifications")}
          />
          <ScrollView>
            <Main navigation={navigation} onPress={onOpen} />
            {/* <HorizontalMainAccount onSelectAccount={onSelectAccount} /> */}
            <WalletsList onPress={nav} onSelectAccount={onSelectAccount} />
            <Space space={17} />
            <Recent onPress={navHistoryTransaction} />
          </ScrollView>
          <YellowButton
            style={{
              alignSelf: "center",
              backgroundColor: COLORS.orangeYellow,
            }}
            width={"90%"}
            size={19}
          >
            Order My Smile CARD
          </YellowButton>
          <Space space={60} />

          <Modalize
            snapPoint={heightBottomSheet}
            ref={modalRef}
            overlayStyle={{
              backgroundColor: COLORS.blueGreenOpacity9,
            }}
            adjustToContentHeight={false}
          >
            <ContentRenders
              nav={nav}
              type={"cashin"}
              closeAll={handleCloseModal}
              name={"cashin"}
            />
          </Modalize>
          <ModelChooseAccount show={visible} onDissmis={onDissmis}  selectedAccountName={selectedAccountName} />
        </HomeLayout>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  RightBox: {
    alignItems: "flex-end",
  },
});

const ModelChooseAccount = ({ show, onDissmis,selectedAccountName }) => {
  return (
    <CreatedSuccess Visible={show} onDissmis={onDissmis}>
      {BodyModel ? <BodyModel onDissmis={onDissmis} selectedAccountName={selectedAccountName} /> : null}
    </CreatedSuccess>
  );
};

const BodyModel = ({ onDissmis,selectedAccountName }) => {
  return (
    <View>
      <HeaderModal selectedAccountName={selectedAccountName} />
      <BodyModal />
    </View>
  );
};

const HeaderModal = ({selectedAccountName}) => {
  console.log('selectedAccountName', selectedAccountName.name)
  return (
    <>
      <HView
        spaceBetween
        style={{ paddingHorizontal: 15, paddingVertical: 15 }}
      >
        <View style={{ height: 50, justifyContent: "space-between" }}>
          <Txt color={COLORS.dark} style={styles.chose}>
            Choose account :
          </Txt>
          <TouchableOpacity
            onPress={() => {
              // onSelectAccount();
            }}
          >
            <HView>
              <Txt style={{ paddingRight: 10 }} color={COLORS.orangeYellow}>
                { selectedAccountName.name == "Main Account"? "MAIN ACCOUNT" :'Secondary Account'}
              </Txt>
            </HView>
          </TouchableOpacity>
        </View>

        <View style={styles.RightBox}>
          <Txt fontSize={24} Bold="700" lineHeight={30}>
            {"32.677.92"}
          </Txt>
          <Txt color={COLORS.greyblue}>USD</Txt>
        </View>
      </HView>
    </>
  );
};

const BodyModal = ({ isSelected }) => {
  const [selected, setselected] = useState(null);

  const onPress = (index) => {
    setselected(index);
  };

  const Daata = [
    {
      accoutName: "Main Accout",
      amount: "1,374.89 USD",
      uri: require("../../../Assets/VISA/account1.png"),
    },
    {
      accoutName: "2ad Account Alias",
      amount: "1,374.89 USD",
      uri: require("../../../Assets/VISA/account2.png"),
    },
    {
      accoutName: "2ad Account Alias",
      amount: "1,374.89 USD",
      uri: require("../../../Assets/VISA/account3.png"),
    },
  ];

  return (
    <>
      {Daata.map((item, index) => {
        return (
          <RenderItem
            item={item}
            index={index}
            onPress={onPress}
            selected={selected}
          />
        );
      })}
    </>
  );
};

const RenderItem = ({ item, index, selected, onPress }) => {
  const isSelected = index === selected;

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: isSelected ? COLORS.orangeYellow : COLORS.transparent,
        padding: 10,
        borderRadius: 6,
        marginVertical: 10,
        backgroundColor: COLORS.lightBlueGrey30,
      }}
      onPress={() => onPress(index)}
    >
      <View style={{flexDirection:'row' , alignItems:'center',justifyContent:'space-between'}}>
        <View>
          <Txt
            fontSize={16}
            Bold="700"
            color={isSelected ? COLORS.orangeYellow : COLORS.coolGrey}
          >
            {item.accoutName}
          </Txt>
          <Txt
            fontSize={14}
            Bold="700"
            color={COLORS.blueGreen}
            style={{ opacity: 0.4 }}
          >
            25.778.99 <Txt fontSize={12}>USD</Txt>
          </Txt>
        </View>
        <Image source={item.uri} />
      </View>
    </TouchableOpacity>
  );
};
