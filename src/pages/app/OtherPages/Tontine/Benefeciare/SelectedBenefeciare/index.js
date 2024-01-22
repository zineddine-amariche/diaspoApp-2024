import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

import ImgBack from '../../../../../../Assets/Img/HomeBack.png';
import {PrimaryButtonLinear} from '../../../../../../components/Buttons';
import SecondaryHeader from '../../../../../../components/Headers/root/SecondaryHeader';
import Space from '../../../../../../components/Space';
import * as _ from '../../../../../../components/utils';
import {COLORS, SIZES} from '../../../../../../theme';
import thumbnailPath from '../../../../../../Assets/Img/ContactsUser.png';
import Rectangle from '../../../../../../components/views/Rectangle';
import {TouchableOpacity} from 'react-native';
import UseCheckBoxElements from '../../../../../../components/checkBox/useCheckBoxElements';
import {useSelector} from 'react-redux';
import ModelConfirmCreateParticipants from '../components/Models/Model.ConfirmCreateParticipants';
import {UseBenef} from '../Hooks/useBenef';

const ListBéneféciare = ({navigation, route}) => {
  const {GlobalBen, GlobalBen2, GlobalBen3, ARR, projectId, type, title} =
    route.params;

  const {onSubmit} = UseBenef();

  const {isLoading} = useSelector(state => ({
    ...state.createParticipants,
  }));

  const [success2, setsuccess2] = useState(false);

  const onDissmis2 = useCallback(() => {
    setsuccess2(false);
  }, []);
  const onSuccess2 = useCallback(() => {
    setsuccess2(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Image
        style={styles.ImageBackground}
        source={ImgBack}
        resizeMode="stretch"
      />
      <>
        <SecondaryHeader
          goBack={() => {
            navigation.navigate('Béneféciare', {projectId, title});
          }}
          title={'Selected Beneficiaries'}
          sousTitre={`${ARR?.length} people selected`}
          Cancel="Return"
        />

        <ScrollView
          contentContainerStyle={{width: SIZES.width}}
          showsVerticalScrollIndicator={false}>
          <Space space={15} />
          <View style={{paddingHorizontal: 20}}>
            <Rectangle width="100%" style={{paddingVertical: 10}}>
              <Content1 GlobalBen={GlobalBen} GlobalBen2={GlobalBen2} />
              <Content3 GlobalBen3={GlobalBen3} GlobalBen2={GlobalBen2} />
              <Content2 GlobalBen2={GlobalBen2} />
            </Rectangle>
            <Space />
          </View>
        </ScrollView>
        <Space space={120} />
      </>

      <View style={styles.containerButton}>
        <PrimaryButtonLinear
          loading={isLoading}
          disabled={true}
          onPress={() => {
            onSuccess2();
          }}
          width={'100%'}>
          confirm
        </PrimaryButtonLinear>
      </View>

      <ModelConfirmCreateParticipants
        success={success2}
        onDissmis={onDissmis2}
        pressNo={onDissmis2}
        pressYes={() => {
          let props = {
            GlobalBen,
            type,
            projectId,
            title: 'Set Beneficiary Order',
          };
          onSubmit(props);
        }}
      />
    </SafeAreaView>
  );
};
export default ListBéneféciare;

const Content1 = ({GlobalBen, GlobalBen2}) => {
  return GlobalBen?.map((i, index) => {
    return (
      <View key={index}>
        <>
          <TouchableOpacity
            style={styles.Container}
            onPress={() => {
              // console.log('index' , index)
              // handleOnChange(index, item);
            }}>
            <View>
              <Image
                source={thumbnailPath}
                style={styles.Img}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '57%'}}>
              <_.Head
                fontSize={17}
                color={COLORS.darkBlueGrey}
                numberOfLines={1}>
                {i.firstName}
              </_.Head>

              <_.Txt fontSize={12} color={COLORS.coolGrey}>
                {i.mobileNumber}
              </_.Txt>
            </View>

            <UseCheckBoxElements index={index} isCheck={true} />
          </TouchableOpacity>
          {index === GlobalBen?.length - 1 && !GlobalBen2.length ? null : (
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: COLORS.silverTwo,
              }}></View>
          )}
        </>
      </View>
    );
  });
};
const Content2 = ({GlobalBen3, GlobalBen2}) => {
  return GlobalBen3?.map((i, index) => {
    return (
      <View key={index}>
        <>
          <TouchableOpacity
            style={styles.Container}
            onPress={() => {
              // console.log('index' , index)
              // handleOnChange(index, item);
            }}>
            <View>
              <Image
                source={thumbnailPath}
                style={styles.Img}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '57%'}}>
              <_.Head
                fontSize={17}
                color={COLORS.darkBlueGrey}
                numberOfLines={1}>
                Pippa Rachel
              </_.Head>

              <_.Txt fontSize={12} color={COLORS.coolGrey}>
                {i}
              </_.Txt>
            </View>

            <UseCheckBoxElements index={index} isCheck={true} />
          </TouchableOpacity>
          {index === GlobalBen3?.length - 1 && !GlobalBen2.length ? null : (
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: COLORS.silverTwo,
              }}></View>
          )}
        </>
      </View>
    );
  });
};
const Content3 = ({GlobalBen2}) => {
  return GlobalBen2?.map((i, index) => {
    return (
      <View key={index}>
        <>
          <TouchableOpacity
            style={styles.Container}
            onPress={() => {
              // console.log('index' , index)
              // handleOnChange(index, item);
            }}>
            <View style={{width: '57%'}}>
              <_.Head
                fontSize={17}
                color={COLORS.darkBlueGrey}
                numberOfLines={1}>
                {i.displayName}
              </_.Head>

              <_.Txt fontSize={12} color={COLORS.coolGrey}>
                {/* {i} */}
                {i?.phoneNumbers[0]?.number}
              </_.Txt>
              <_.Txt fontSize={12} color={COLORS.coolGrey}>
                jonathan-joseph@diaspo.com
              </_.Txt>
            </View>

            <UseCheckBoxElements index={index} isCheck={true} />
          </TouchableOpacity>
          {index === GlobalBen2?.length - 1 ? null : (
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: COLORS.silverTwo,
              }}></View>
          )}
        </>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
    alignItems: 'center',
    flex: 1,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    height: 110,
  },
  topinuptxt: {
    padding: 20,
  },
  containerButton: {
    width: '100%',
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: Platform.OS == 'ios' ? 30 : 20,
    padding: Platform.OS == 'ios' ? 30 : 20,
  },
  BoxInfoTextYellow: {
    justifyContent: 'center',
  },
  textInfo: {
    marginLeft: 8,
  },
  Input: {
    color: COLORS.darkBlueGrey,
    fontSize: 20,
    // //fontFamily: "Roboto-Bold",
    flex: 1,
    paddingLeft: 2,
  },
  Container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Img: {
    borderRadius: 5,
    height: 40,
    width: 40,
  },
});
