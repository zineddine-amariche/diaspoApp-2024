import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getPayers} from '../../../../../../redux/Features/Tontine/Participants/getPayers/slice';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import PrimaryTemplate from '../../../../../../components/Template-Pages/PrimaryPage';
import Spiner from '../../../../../../components/spiner';
import EmptyList from './Components/EmptyList';
import {COLORS} from '../../../../../../theme';
import {Head, Txt} from '../../../../../../components/utils';
import {
  deleteSelectedListPayers,
  resetPayers,
} from '../../../../../../redux/Features/Tontine/ManagePayers';
import Space from '../../../../../../components/Space';
import {useCallback} from 'react';
import CreatedSuccess from '../../../../../../components/views/Layouts/AuthLayout/Model';
import HView from '../../../../../../components/views/HView/HView';
import {
  PaleGreyButton,
  PrimaryButtonLinear,
} from '../../../../../../components/Buttons';
import SimpleSpiner from '../../../../../../components/spiner/SimpleSpiner';
import ModelValidateReoder from '../Components/models/Model.ValidateReOrder';
import {useValidateReoder} from '../Hooks/useValidateReoder';

const ViewPayersList = ({navigation, route}) => {
  const {projectId, routeData, isNew} = route.params;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const bottomSheetModalRef2 = useRef(null);

  const closeModalReminder = useCallback(() => {
    bottomSheetModalRef2.current.close();
  }, []);

  const handlePresentModalReminder = useCallback(() => {
    bottomSheetModalRef2.current?.present();
  }, []);

  const [success, setsuccess] = useState(false);
  const [success2, setsuccess2] = useState(false);
  const [success3, setsuccess3] = useState(false);

  const onDissmis = useCallback(() => {
    setsuccess(false);
    // navToTontine();
  }, []);
  const onSuccess = useCallback(() => {
    setsuccess(true);
  }, []);

  const sendReminder = () => {
    // closeModalReminder();
    onSuccess();
  };
  const startWithparticipants = () => {
    setsuccess2(true);
    closeModalReminder();
  };
  const cancelTontin = () => {
    setsuccess3(true);
    closeModalReminder();
  };

  const {isError, data, isLoading, message} = useSelector(state => ({
    ...state.getpayers,
  }));
  useEffect(() => {
    dispatch(getPayers(projectId));
  }, [projectId, isFocused, dispatch]);

  const [visible, setVisible] = useState(false);

  const {user} = useSelector(state => ({
    ...state.auth,
  }));
  let object = {
    projectId: projectId,
    token: user?.AccessToken,
  };

  const nav = () => {
    if (!routeData) {
      navigation.navigate('Tontine');
      goBackFun();
    } else {
      setVisible(true);
      setTimeout(() => {
        navigation.navigate('InfoScreenTontine', {
          routeData,
          projectId,
          isFirstTime: false,
          object,
        });
        setVisible(false);
      }, 2000);

      goBackFun();
    }
  };

  const goBackFun = () => {
    setTimeout(
      () => dispatch(resetPayers(), dispatch(deleteSelectedListPayers())),
      2000,
    );
  };

  if (message.statusDescription) {
    alert(message.statusDescription);
  }

  //  console.log('data.data', data.data)

  const {
    pressNo: PressDesValidate,
    pressYes: PreesYes,
    onClose,
    onShow,
    showValidateOrder,
  } = useValidateReoder();

  return (
    <>
      {visible ? (
        <SimpleSpiner toast={true} visible={visible} />
      ) : (
        <PrimaryTemplate title="Payers List" navigation={nav}>
          {isLoading ? (
            <Spiner />
          ) : data?.data?.payers?.length !== 0 ? (
            <>
              <Space space={20} />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    borderRadius: 8,
                    marginTop: 20,
                  }}>
                  {data?.data?.payers?.map((item, index) => {
                    return (
                      <View
                        style={[
                          styles.container,
                          {
                            borderBottomWidth:
                              data?.data?.payers.length !== index + 1 ? 1 : 0,
                            borderBottomColor:
                              data?.data?.payers.length !== index + 1
                                ? COLORS.silver
                                : '',
                          },
                        ]}
                        key={index}>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                          onPress={() => {
                            // handlePresentModalReminder();
                            sendReminder();
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              width: '70%',
                              overflow: 'hidden',
                            }}>
                            {/* <Image
                            source={Imge}
                            style={{height: 30, width: 30, marginRight: 10}}
                          /> */}
                            <View style={{height: 10, width: 10}}></View>
                            <View style={{width: '100%'}}>
                              <Txt
                                color={COLORS.darkBlueGrey}
                                fontSize={17}
                                style={{textTransform: 'capitalize'}}
                                numberOfLines={1}>
                                {item?.payerDetails?.details?.firstName}{' '}
                                {item?.payerDetails?.details?.lastName}
                              </Txt>
                              <Txt fontSize={12} color={COLORS.coolGrey}>
                                {item?.payerDetails?.details?.mobileNumber}
                              </Txt>
                            </View>
                          </View>
                          <View
                            style={{
                              backgroundColor:
                                item?.status === 'PENDING'
                                  ? COLORS.iceBlueTwo
                                  : item?.status === 'ACCEPTED'
                                  ? COLORS.lightSage
                                  : COLORS.veryLightPink,
                              paddingHorizontal: 10,
                              paddingVertical: 2,
                              borderRadius: 13,
                            }}>
                            <Txt
                              color={
                                item?.status === 'PENDING'
                                  ? COLORS.darkSkyBlue
                                  : item?.status === 'ACCEPTED'
                                  ? COLORS.greenishTeal
                                  : COLORS.coral
                              }
                              fontSize={14}>
                              {item?.status}
                            </Txt>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </>
          ) : (
            <EmptyList />
          )}

          <CreatedSuccess Visible={success} onDissmis={onDissmis} padding={1}>
            {BodyModel1 ? <BodyModel1 onDissmis={onDissmis} /> : null}
          </CreatedSuccess>

          {!isLoading && <ReorderButton isNew={isNew} onPress={onShow} />}

          <ModelValidateReoder
            success={showValidateOrder}
            onDissmis={onClose}
            pressYes={() => {
              onClose();
              nav();
            }}
            pressNo={PreesYes}
          />
        </PrimaryTemplate>
      )}
    </>
  );
};

export default ViewPayersList;
const BodyModel1 = ({onDissmis, navToTontine}) => {
  return (
    <>
      <View style={styles.ModelContainer}>
        <Space />

        <Head
          //  fontFamily={'Poppins-Bold'}
          style={{paddingHorizontal: 20, textAlign: 'center'}}>
          Send reminder ?
        </Head>
        <Space />

        <View style={{paddingHorizontal: 20, textAlign: 'center'}}>
          <Txt color={COLORS.slateGrey} fontSize={14}>
            The payers and beneficiaries will receive the reminder to repnse to
            you'r invitaion to join this tontine
          </Txt>
        </View>
        <Space />
        <HView spaceBetween>
          <PaleGreyButton
            onPress={() => {
              onDissmis();
              // validate number of payers
            }}
            width={'48%'}>
            Cancel
          </PaleGreyButton>
          <PrimaryButtonLinear
            disabled={true}
            onPress={() => {
              onDissmis();
              navToTontine();
            }}
            width={'48%'}>
            SEND
          </PrimaryButtonLinear>
        </HView>
      </View>
    </>
  );
};

const ReorderButton = ({
  resetSuccesParticipants,
  navigation,
  projectId,
  isNew,
  onPress
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.containerButton}>
      {isNew && (
        <>
          <PrimaryButtonLinear
            disabled={true}
            onPress={() => {
              onPress()
            }}>
            Validate the order
          </PrimaryButtonLinear>
          <Space space={15} />
        </>
      )}

      {Platform.OS == 'ios' ? <Space /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginVertical: 4,
    padding: 10,
  },
  ModelContainer: {
    padding: 10,
  },
  containerButton: {
    width: '100%',
    // height: 110,
    // position: 'absolute',
    // bottom: 0,
  },
});
