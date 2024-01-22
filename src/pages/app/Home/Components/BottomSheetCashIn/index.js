import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import CustomBackdrop from "./CustomBackdrop";
import { COLORS } from "../../../../../theme";
import ContentRenders from "./ContentRenders";

const BottomSheetCashIn = ({
  bottomSheetModalRef,
  onPress2,
  navigation,
  closeBottomUp2,
  closeBottomUp1
}) => {
  // const snapPoints = useMemo(() => ["45%"]);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
  }, []);
  const handleClosePress = () => {
    bottomSheetModalRef.current.forceClose();
    // closeDrawer();
    // closeAccount();
  };

  return (
    //  <BottomSheetModalProvider>
    <View style={styles.containerBottom}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={CustomBackdrop}
        onDismiss={handleClosePress}
        handleIndicatorStyle={{
          backgroundColor: COLORS.blueGreen,
          width: 50,
          height: 5,
        }}
        animateOnMount={true}
        enablePanDownToClose={true}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <ContentRenders
            onPress={handleClosePress}
            navigation={navigation}
            closeBottomUp2={closeBottomUp2}
            closeBottomUp1={closeBottomUp1}
            onPress2={onPress2}

          />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
    //  </BottomSheetModalProvider>
  );
};

export default BottomSheetCashIn;

const styles = StyleSheet.create({});
