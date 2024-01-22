import { Alert, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Head, Txt } from "../../../../../../../../components/utils";
import { COLORS } from "../../../../../../../../theme";
import { useDispatch, useSelector } from "react-redux";
import Space from "../../../../../../../../components/Space";
import { useState } from "react";

import CardUserNonApp from "../CardUserNonApp";
import { PrimaryButtonLinear } from "../../../../../../../../components/Buttons";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  resetTontine,
  selcetNonAppUser,
  updateGlobalePayerSelected,
  updateNonAppUser,
} from "../../../../../../../../redux/Features/Tontine/ManageTontine/Slices/tontineSlice";
import {
  getNonAppUsers,
  resetNonAppUserConnected,
} from "../../../../../../../../redux/Features/Tontine/ManagePayers/NonAppUsers/slice";

import thumbnailPath from "../../../../../../../../Assets/Img/icon24Edit.png";
import icon24TrashBin from "../../../../../../../../Assets/Img/icon24TrashBin.png";
import HView from "../../../../../../../../components/views/HView/HView";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import UseCheckBoxElements from "../../../../../../../../components/checkBox/useCheckBoxElements";
import { Logout } from "../../../../../../../../redux/Features/authentification/Login/Slice";
import { resetUserConnected } from "../../../../../../../../redux/Features/Tontine/ManagePayers/ConectedUsers/slice";
import { useMemo } from "react";
import { ActivityIndicator } from "react-native-paper";
import { ActiveLoaderPayer, disableSelectedListPayers, resetPayers, updateNonAppUsersPayers } from "../../../../../../../../redux/Features/Tontine/ManagePayers";
import { FlatList } from "react-native";
import SimpleSpiner from "../../../../../../../../components/spiner/SimpleSpiner";
const durationMs = 350;

const Form2 = ({
  onPress,
  onSuccess,
  onEdit,
  index,
  setGlobalBen,
}) => {
  const dispatch = useDispatch();

  const { contacts } = useSelector((state) => ({ ...state.contacts }));
  const { nonConnectedUsers, loader, message } = useSelector((state) => ({
    ...state.nonUserApp,
  }));
  const { deleteListPayers } = useSelector((state) => ({
    ...state.payers,
  }));
  const { token } = useSelector((state) => ({ ...state.token }));
  const [DataNonApp, setdataNonApp] = useState([]);

  let nbr = 7;
  const [next, setNext] = useState(nbr);
  const [Loading, setLoading] = useState(false);
  let dataV = DataNonApp?.slice(0, next);
  const renderLoader = () => {
    return Loading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="small" color={COLORS.blueGreen} />
      </View>
    ) : null;
  };
  const loadMore = ({ distanceFromEnd }) => {
    if (next < DataNonApp.length) {
      setLoading(true);
      handleMoreImage();
    }
  };
  const handleMoreImage = () => {
    setNext(next + 7);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <View key={index} style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <HView width={"100%"} spaceBetween>
              <TouchableOpacity onPress={onEdit}>
                <Image
                  source={thumbnailPath}
                  style={styles.Img}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSuccess}>
                <Image
                  source={icon24TrashBin}
                  // style={styles.Img}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </HView>

            <TouchableOpacity
              onPress={() => {
                HandelChangeCheck(item.id);
                getSelectedVal(item);
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "75%",
              }}
            >
              <View>
                <Head
                  fontSize={17}
                  color={COLORS.darkBlueGrey}
                  numberOfLines={1}
                >
                  {item?.key}
                </Head>

                <Txt fontSize={12} color={COLORS.coolGrey}>
                  {/* {item?.phoneNumbers[0]?.number} */}
                  +76 7863 203293
                </Txt>
                <Txt fontSize={12} color={COLORS.coolGrey}>
                  christopher-colin@diaspo.com
                </Txt>
              </View>
              <UseCheckBoxElements index={index} isCheck={item.checked} />
            </TouchableOpacity>
          </View>

          {index === DataNonApp?.length - 1 ? null : (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: COLORS.silverTwo,
              }}
            ></View>
          )}
        </View>
      </View>
    );
  };

  // !select non app users
  const HandelChangeCheck = (item) => {
    let data = [...DataNonApp];
    let index = data.findIndex((x) => x.id === item);
    data[index].checked = data[index].checked === false ? true : false;
    setdataNonApp(data);
  };
  // !get values
  const getSelectedVal = (item) => {
    var keys = DataNonApp.map((t) => t.key);
    var checks = DataNonApp.map((t) => t.checked);
    let Selected = [];
    for (let i = 0; i < checks.length; i++) {
      if (checks[i] == true) {
        Selected.push(keys[i]);
      }
    }
    dispatch(ActiveLoaderPayer())

      setTimeout(() => {
        dispatch(updateNonAppUsersPayers(Selected));
      setGlobalBen(Selected)

      }, 500);

  };
  // !clear messages errors
  const clearAsyncStorage = async () => {
    dispatch(resetUserConnected());
    dispatch(resetNonAppUserConnected());
    dispatch(Logout());
    AsyncStorage.clear();
    dispatch(resetTontine());
  };
  // !get non app users
  useEffect(() => {
    let arr = [];
    contacts?.map((item) => {
      arr.push(item?.phoneNumbers[0]?.number);
    });
    dispatch(getNonAppUsers({ arr, token }));
  }, []);
  // !new Object
  useEffect(() => {
    let temp = nonConnectedUsers?.data?.walletAccountUserMobile;
    let formatdata = [];
    for (let i = 0; i < temp?.length; i++) {
      formatdata.push({
        id: i,
        key: temp[i],
        checked: false,
      });
    }
    // console.log('formatdata', formatdata)
    setdataNonApp(formatdata);
    // dispatch(updateBSelected(formatdata));

    
    if (deleteListPayers) {
      setGlobalBen([]);
      setTimeout(() => dispatch(resetPayers()), durationMs);
      let formatdata = [];
      for (let i = 0; i < temp?.length; i++) {
        formatdata.push({
          id: i,
          key: temp[i],
          checked: false,
        });
      }
      setdataNonApp(formatdata);
      dispatch(disableSelectedListPayers());

    }

  }, [nonConnectedUsers,deleteListPayers]);
  // !manage Error
  useEffect(() => {
    if (message && index === 2) {
      Alert.alert(
        message?.status + " M2",
        message?.statusDescription
          ? message?.statusDescription
          : "Error getting information",
        [
          {
            text: "Cancel",
            onPress: () => {
              if (
                message?.statusDescription == "Expired token" ||
                message?.statusDescription == "Wrong number of segments"
              ) {
                clearAsyncStorage();
              } else {
                // dispatch(resetTontine());
                dispatch(resetNonAppUserConnected());
                dispatch(resetUserConnected());
              }
            },

            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              if (
                message?.statusDescription == "Expired token" ||
                message?.statusDescription == "Wrong number of segments"
              ) {
                clearAsyncStorage();
              } else {
                // dispatch(resetTontine());
                dispatch(resetNonAppUserConnected());
                dispatch(resetUserConnected());
              }
            },
          },
        ]
      );
    }
  }, [message]);
  useEffect(() => {
    if (next > DataNonApp.length) {
      setLoading(false);
    }
  }, [next]);
  useEffect(() => {
    if (next === DataNonApp.length) {
      setLoading(false);
    }
  }, [next])
  
  const memoizedValue = useMemo(() => renderItem, [DataNonApp]);
  return (
    <>
      {loader ? (
         <SimpleSpiner />
      ) : DataNonApp?.length ? (

          <View
            style={{ backgroundColor: COLORS.paleGrey, paddingHorizontal: 20, flex: 1 }}
            
          >
            <>
            <Space space={20} />
              <View>
                <Txt>{DataNonApp?.length} saved non-app users</Txt>
              </View>
              <Space space={15} />

            
                  <View
              width="100%"
              style={{
                paddingVertical: 10,
                marginBottom: 20,
                backgroundColor: COLORS.white,
                flex:1,
                borderRadius:8
              }}>
                    <FlatList
                      data={dataV}
                      renderItem={memoizedValue}
                      keyExtractor={(item, index) => index}
                      ListFooterComponent={renderLoader}
                      onEndReached={loadMore}
                      onEndReachedThreshold={0.1}
                    />
                  </View>
                  <Space space={20} />
                  <PrimaryButtonLinear disabled={true} onPress={onPress}>
                    add a new person
                  </PrimaryButtonLinear>
                  <Space space={20} />

                </>
          
          </View>

      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 300,
          }}
        >
          <Txt color={COLORS.coral} style={{ padding: 20 }}>
            There are no non app users .
          </Txt>
        </View>
      )}
    </>
  );
};

export default Form2;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Img: {
    marginHorizontal: 10,
  },
});

// let arr = [];
// contacts?.map((item) => {
//   arr.push(item?.phoneNumbers[0]?.number);
//   // dispatch(numbersSet([...arr]));
// });
// useEffect(() => {
//   dispatch(getNonAppUsers({ arr, token }));
// }, []);

// const [checkedState, setCheckedState] = useState(
//   new Array(contacts?.length).fill(false)
// );
// const {
//   selectedConectedContacts,
//   selectedFromContacts,
//   selectedNonAppContacts,
//   globalePayerSelected,
// } = useSelector((state) => ({
//   ...state.tontines,
// }));

// const [currentOptionSelected, setCurrentOptionSelected] = useState([]);
// const handleOnChange = (position, option) => {
//   const updatedCheckedState = checkedState.map((item, index) =>
//     index === position ? !item : item
//   );
//   setCheckedState(updatedCheckedState);
//   dispatch(updateNonAppUser(updatedCheckedState)); // garder checked contacts after change value
//   let filter = currentOptionSelected.includes(option);
//   if (filter) {
//     let itemsCopy = [...currentOptionSelected];
//     var index = currentOptionSelected.indexOf(option);
//     itemsCopy.splice(index, 1); // to delete one item from the new array
//     setCurrentOptionSelected(itemsCopy);
//     dispatch(selcetNonAppUser(itemsCopy));
    // dispatch(updateGlobalePayerSelected([...globalePayerSelected, itemsCopy]));

    // dispatch(
    //   updateGlobalePayerSelected([
    //     ...globalePayerSelected,
    //     ...selectedNonAppContacts,
    //   ])
    // );
    // console.log('itemsCopy', itemsCopy)
//   } else {
//     setCurrentOptionSelected([...currentOptionSelected, option]);
//     dispatch(selcetNonAppUser([...currentOptionSelected, option]));
    // dispatch(updateGlobalePayerSelected([...globalePayerSelected, option]));

    // dispatch(
    //   updateGlobalePayerSelected([
    //     ...globalePayerSelected,
    //     ...selectedNonAppContacts,
    //   ])
    // );
    // console.log('[...currentOptionSelected, option]', [...currentOptionSelected, option])
//   }
// };

// const HandelChageGlobale = (position, option) => {
//   const updatedCheckedState = checkedState.map((item, index) =>
//     index === position ? !item : item
//   );
//   setCheckedState(updatedCheckedState);
//   let filterGlobaleContacts = globalePayerSelected.includes(option);
//   console.log("filterGlobaleContacts", filterGlobaleContacts);
//   if (filterGlobaleContacts) {
//     let itemsCopy = [...globalePayerSelected];
//     var index = globalePayerSelected.indexOf(option);
//     itemsCopy.splice(index, 1); // to delete one item from the new array of Globale Contacts
//     dispatch(updateGlobalePayerSelected(itemsCopy));
//   } else {
//     dispatch(updateGlobalePayerSelected([...globalePayerSelected, option]));
//   }
// };

// const { check3 } = useSelector((state) => ({
//   ...state.tontines,
// }));

{
  /* <CardUserNonApp
item={item}
index={index}
length={contacts?.length}
handleOnChange={handleOnChange}
HandelChageGlobale={HandelChageGlobale}
checkedState={checkedState}
check={check3}
onPress={onPress}
connected
onSuccess={onSuccess}
onEdit={onEdit}
/> */
}


          // const filterGlobaleContacts = GlobalBen.indexOf(item.key) >= 0;
    // if (!filterGlobaleContacts) {
      // setGlobalBen(Selected);
    // } else {
    //   let itemsCopy = [...GlobalBen];
    //   var index = GlobalBen.indexOf(item);
    //   itemsCopy.splice(index, 1); // to delete one item from the new array of Globale Contacts
    //   // setGlobalBen(itemsCopy);
    //   setTimeout(() => {
    //     dispatch(updateNonAppUsersPayers(Selected));
    //   }, 500);
    // }
