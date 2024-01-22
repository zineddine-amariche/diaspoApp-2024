import React, {useCallback, useRef, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import ImgBack from '../../../../../Assets/Img/HomeBack.png';
import SecondaryHeader from '../../../../../components/Headers/root/SecondaryHeader';
import Space from '../../../../../components/Space';
import {COLORS, SIZES} from '../../../../../theme';
import cart2 from '../../../../../Assets/Img/carte2.png';
import ImageInfo from '../../../../../Assets/Img/icon24Info.png';

import {
  PaleGreyButton,
  PaleLockedButton,
  PrimaryButtonLinear,
} from '../../../../../components/Buttons';
import {TouchableOpacity} from 'react-native';
import BottomSheetRemove from './BottomSheetRemove';
import CreatedSuccess from '../../../../../components/views/Layouts/AuthLayout/Model';
import HView from '../../../../../components/views/HView/HView';
import {View} from 'react-native';
import {Head, Txt} from '../../../../../components/utils';

import Credit from '../../../../../Assets/VISA/broken-card.png';
import Bank from '../../../../../Assets/VISA/payment-method.png';
import EWallet from '../../../../../Assets/VISA/customer-transactions.png';
import EWalletq from '../../../../../Assets/VISA/pos-payments.png';
import Toast from 'react-native-simple-toast';
import {Modalize} from 'react-native-modalize';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';

const CreditsCards = ({navigation,route}) => {


  const {title} = route.params
  const bottomSheetModalRef2 = useRef(null);
  const modalRef = useRef(null);

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
  const [islocked, setislocked] = useState(false);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onClose = () => {
    modalRef.current?.close();
  };
  return (
    <ReturnHeader
      goBack={() => {
        navigation.goBack();
      }}
      title={title}
      sousTitre={`1 card connected`}
      Cancel="Return">
<ScrollView contentContainerStyle={{width:SIZES.width}} >

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          width: '100%',
          marginTop:10,
          backgroundColor: COLORS.finished,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: '#1112',
              width: '90%',
              borderRadius: 16,
              overflow: 'hidden',
              alignItems: 'center',
            }}>
            <Image source={cart2} style={{width: '100%', overflow: 'hidden'}} />
          </TouchableOpacity>
          <Space space={20} />
          {!islocked ? (
            <RenderListVisa />
          ) : (
            <View style={{paddingTop: 90}}>
              <Txt color={COLORS.coral}> Your card is locked</Txt>
            </View>
          )}
        </>
        <Space space={40} />
        <View style={{width: '100%', alignItems: 'center'}}>
          {!islocked ? (
            <PrimaryButtonLinear
              width={'90%'}
              disabled={true}
              textTransform="uppercase"
              onPress={() => {
                // navigation.navigate('CreateCard');
                onOpen();
              }}>
              Display my pin code
            </PrimaryButtonLinear>
          ) : null}
          <Space space={10} />

          <PaleLockedButton
          gap
            isLocked={islocked}
            width={'90%'}
            style={{}}
            disabled={true}
            textTransform="uppercase"
            onPress={() => {
              // navigation.navigate('CreateCard');
              setislocked(!islocked);
            }}>
            {islocked ? 'unLock the card' : 'lock the card'}
          </PaleLockedButton>
        </View>
      </View>

      <CreatedSuccess Visible={success} onDissmis={onDissmis}>
        {BodyModel ? <BodyModel onDissmis={onDissmis} /> : null}
      </CreatedSuccess>

      <Modalize
        snapPoint={370}
        ref={modalRef}
        overlayStyle={{
          backgroundColor: COLORS.blueGreenOpacity9,
        }}
        adjustToContentHeight={false}>
        <ContentRenders onClose={onClose} />
      </Modalize>

      {/* Remove Card */}
      <BottomSheetRemove
        bottomSheetModalRef={bottomSheetModalRef2}
        onPress={handlePresentModalRemove}
        closeBottomUp2={closeBottomUp2}
        navigation={navigation}
        ShowPopup={onSuccess}
      />
</ScrollView>

    </ReturnHeader>
  );
};
export default CreditsCards;

// <SafeAreaView style={styles.container}>
//   <StatusBar translucent={true} backgroundColor={'transparent'} />
//   <Image
//     style={styles.ImageBackground}
//     source={ImgBack}
//     resizeMode="stretch"
//   />

const BodyModel = ({onDissmis}) => {
  return (
    <View style={styles.ModelContainer}>
      {/* <Image source={illusphone} style={{ width: "100%" }} /> */}

      <Head
        //  fontFamily={"Poppins-Bold"}
        style={{padding: 20, textAlign: 'center'}}>
        Are you sure to remove this card?
      </Head>
      <Txt
        color={COLORS.slateGrey}
        style={{
          paddingHorizontal: 10,
          textAlign: 'center',
          //fontFamily: "Poppins-SemiBold",
        }}
        fontSize={14}>
        You won’t be able to use it for Diaspo service anymore.
      </Txt>
      <Space space={20} />
      <HView width={'100'} spaceBetween>
        <PaleGreyButton width={'48%'} onPress={onDissmis}>
          cancel
        </PaleGreyButton>
        <PrimaryButtonLinear width={'48%'} disabled onPress={onDissmis}>
          remove
        </PrimaryButtonLinear>
      </HView>
    </View>
  );
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
    height: 130,
  },
});

const ContentRenders = ({onClose}) => {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const randomNumber2 = Math.floor(Math.random() * 9) + 1;
  const randomNumber3 = Math.floor(Math.random() * 9) + 1;
  const randomNumber4 = Math.floor(Math.random() * 9) + 1;
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 18,
        marginTop: 15,
        alignItems: 'center',
      }}>
      <Head style={styles.Head}>PIN CODE</Head>
      <View
        style={{
          width: '60%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 30,
        }}>
        {[randomNumber, randomNumber2, randomNumber3, randomNumber4].map(i => {
          return (
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: COLORS.blueGreenOpacity5,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: COLORS.blueGreen,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 1,
              }}>
              <Txt fontSize={15} Bold="700">
                {i}
              </Txt>
            </View>
          );
        })}
      </View>
      <NotePinCode />
      <Space space={20} />
      <PrimaryButtonLinear
        width={'90%'}
        disabled={true}
        textTransform="uppercase"
        onPress={() => {
          // navigation.navigate('CreateCard');
          onClose();
        }}>
        VALIDATE
      </PrimaryButtonLinear>
    </View>
  );
};

const RenderListVisa = ({navigation}) => {
  const data = [
    {
      date: 'Disabled',
      T2: 'Put a limit on your Card',
      source: Credit,
      to: 'CreditsCards',
    },
    {
      date: 'enabled',
      T2: 'Associate your Card to Applepay or\nGooglepay',
      source: Bank,
      to: 'BankAccounts',
    },
    {
      date: 'Disabled',
      T2: 'Activate the contactless',
      source: EWalletq,
      to: 'EWalletAccounts',
    },
    {
      date: 'Disabled',
      T2: 'Active Online Payments',
      source: EWallet,
      to: 'EWalletAccounts',
    },
  ];

  return data.map((i, index) => {
    return (
      <View
        key={index}
        style={{
          width: '90%',
          backgroundColor: '#FFF',
          paddingHorizontal: 25,
          borderRadius: 8,
          marginVertical: 4,
        }}>
        <RenderItems
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
  });
};

const RenderItems = ({
  lenght,
  index,
  T1,
  T2,
  T3,
  Price,
  date,
  source,
  item,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Toast.show('coming soon');
      }}>
      <HView spaceBetween>
        <HView
          style={{
            paddingVertical: 10,
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <Image source={source} style={{marginRight: 20}} />
          <View style={{}}>
            <Txt
              fontSize={14}
              // fontFamily={'Poppins-SemiBold'}
              color={COLORS.darkBlueGrey}>
              {T2}
            </Txt>
            <Txt fontSize={12} color={COLORS.coolGrey}>
              {date}
            </Txt>
          </View>
        </HView>
      </HView>
    </TouchableOpacity>
  );
};

const NotePinCode = () => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        width: '90%',
        alignItems: 'stretch',
      }}>
      <Image source={ImageInfo} style={{marginRight: 10, marginTop: 5}} />
      <Txt color={COLORS.slateGrey} fontSize={14}>
        <Txt color={COLORS.black}>Note:</Txt> Your code is confidential you must
        not communicate it to anyone
      </Txt>
    </View>
  );
};
