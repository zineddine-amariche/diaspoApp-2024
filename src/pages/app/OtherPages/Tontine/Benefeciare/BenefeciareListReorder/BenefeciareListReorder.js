import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StatusBar, Image, Platform} from 'react-native';

import ImgBack from '../../../../../../Assets/Img/HomeBack.png';
import SecondaryHeader from '../../../../../../components/Headers/root/SecondaryHeader';
import Space from '../../../../../../components/Space';
import {PrimaryButtonLinear} from '../../../../../../components/Buttons';

import {
  deleteSelectedList,
  deleteToReoderListBeneficiary,
  resetBeneficaire,
} from '../../../../../../redux/Features/Tontine/ManageBenefeciare/ManageStatesBeneficiare';
import UseDraggebleFlatList from '../../../../../../components/DraggebleFlatList';
import ModelConfirmReorder from './components/Models/Model.ConfirmReorder';
import {useReoder} from './Hooks';
import {getBeneficiaries} from '../../../../../../redux/Features/Tontine/Participants/getBeneficiaires/slice';
import {useSelector} from 'react-redux';
import Spiner from '../../../../../../components/spiner';
import styles from './styles';
import ReturnHeader from '../../../../../../components/Headers/root/ReturnHeader';
import {COLORS} from '../../../../../../theme';
import ModelValidateReoder from '../components/Models/Model.ValidateReOrder';
import { useValidateReoder } from './Hooks/useValidateReoder';

const durationMs = 1350;

const BenefeciareListReorder = ({navigation, route}) => {
  const {success2, onDissmis2, onSuccess2, pressNo, pressYes, dispatch} =
    useReoder();

  const {ListToReorder} = useSelector(state => state.beneficaire);

  // console.log('ListToReorder', ListToReorder)
  const {projectId, title, routeData, confirmbtn} = route.params;
  const {data, isLoading} = useSelector(state => ({
    ...state.benef,
  }));
  const {user} = useSelector(state => ({
    ...state.auth,
  }));

  let object = {
    projectId: projectId,
    token: user?.AccessToken,
  };

  useEffect(() => {
    dispatch(getBeneficiaries(projectId));
  }, [projectId, dispatch, title]);


  const {
    pressNo:PressDesValidate,
    pressYes:PreesYes,
    onClose,
    onShow,
    showValidateOrder,
  } =useValidateReoder()

  return isLoading ? (
    <Spiner />
  ) : (
    <ReturnHeader
      Cancel="Return"
      goBack={() => {
        navigation.navigate('InfoScreenTontine', {
          routeData: '',
          projectId,
          object,
        });
        setTimeout(
          () =>
            dispatch(
              resetBeneficaire(),
              dispatch(deleteToReoderListBeneficiary()),
              dispatch(deleteSelectedList()),
            ),
          durationMs,
        );
      }}
      title={title ? title : 'Set Beneficiary Order'}>
      <View style={{backgroundColor: COLORS.finished, flex: 1, width: '100%'}}>
        <Space space={20} />
        <UseDraggebleFlatList DataV={data?.data?.beneficiaries} />

        <View style={styles.containerButton}>
          <PrimaryButtonLinear
            disabled={true}
            onPress={() => {
              // onSuccess2();
              onShow()
            }}>
            Validate the order
          </PrimaryButtonLinear>
          <Space space={15} />
          {confirmbtn ? (
            <PrimaryButtonLinear
              disabled={ListToReorder?.length == 0 ? false : true}
              onPress={() => {
                onSuccess2();
              }}>
              Confirm
            </PrimaryButtonLinear>
          ) : (
            <PrimaryButtonLinear
              disabled={true}
              onPress={() => {
                onSuccess2();
              }}
              width={'100%'}>
              Finish And Send Invitation
            </PrimaryButtonLinear>
          )}

          {/* <Space space={25} /> */}
          {/* <Line color={COLORS.black} /> */}
        </View>
      </View>
      <ModelConfirmReorder
        onDissmis2={onDissmis2}
        success2={success2}
        pressYes={pressYes}
        pressNo={pressNo}
        navigation={navigation}
        projectId={projectId}
        routeData={routeData}
        confirmbtn={confirmbtn}
      />

      <ModelValidateReoder
        success={showValidateOrder}
        onDissmis={onClose}
        pressNo={onClose}
        pressYes={PreesYes}
      />
    </ReturnHeader>
  );
};

export default BenefeciareListReorder;

// <SafeAreaView style={styles.container}>
//   <StatusBar translucent={true} backgroundColor={'transparent'} />
//   <Image
//     style={styles.ImageBackground}
//     source={ImgBack}
//     resizeMode="stretch"
//   />
