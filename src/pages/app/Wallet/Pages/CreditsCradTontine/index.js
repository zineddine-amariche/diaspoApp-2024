import React, {useCallback, useRef, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';

import ImgBack from '../../../../../Assets/Img/HomeBack.png';
import SecondaryHeader from '../../../../../components/Headers/root/SecondaryHeader';
import Space from '../../../../../components/Space';
import {COLORS, SIZES} from '../../../../../theme';
import cart1 from '../../../../../Assets/Img/carte1.png';
import cart2 from '../../../../../Assets/Img/moneyTrans2.png';
import {
  PaleGreyButton,
  PrimaryButtonLinear,
} from '../../../../../components/Buttons';
import NoteWallet from '../../../../../components/views/Note/NoteWallet';
import {TouchableOpacity} from 'react-native';
import CreatedSuccess from '../../../../../components/views/Layouts/AuthLayout/Model';
import HView from '../../../../../components/views/HView/HView';
import {View} from 'react-native';
import {Head, Txt} from '../../../../../components/utils';
import ImageInfo from '../../../../../Assets/Img/icon24Info.png';

import Credit from '../../../../../Assets/VISA/broken-card.png';
import Bank from '../../../../../Assets/VISA/payment-method.png';
import EWallet from '../../../../../Assets/VISA/customer-transactions.png';
import EWalletq from '../../../../../Assets/VISA/pos-payments.png';
import Toast from 'react-native-simple-toast';

import {Line} from 'react-native-svg';

const CreditsCardsTontine = ({navigation}) => {
  const bottomSheetModalRef2 = useRef(null);
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Image
        style={styles.ImageBackground}
        source={ImgBack}
        resizeMode="stretch"
      />

      <SecondaryHeader
        goBack={() => {
          navigation.goBack();
        }}
        title={'Tontine cards'}
        sousTitre={`1 card connected`}
        Cancel="Return"
      />

      <Space space={50} />

      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            // backgroundColor: '#1112',
            width: '90%',
            borderRadius: 16,
            overflow: 'hidden',
            alignItems: 'center',
          }}>
          <Image source={cart2} style={{width: '100%', overflow: 'hidden'}} resizeMode="contain" />
        </TouchableOpacity>
        <NoteWallets />

        <PrimaryButtonLinear
          width={'90%'}
          style={{marginVertical: 10}}
          disabled={true}
          textTransform="uppercase"
          // onPress={() => {
          //   navigation.navigate('CreateCard');
          // }}
          >
          Connect a new card
        </PrimaryButtonLinear>
      </View>

      <Space space={20} />

      <CreatedSuccess Visible={success} onDissmis={onDissmis}>
        {BodyModel ? <BodyModel onDissmis={onDissmis} /> : null}
      </CreatedSuccess>

      {/* Remove Card */}
      {/* <BottomSheetRemove
        bottomSheetModalRef={bottomSheetModalRef2}
        onPress={handlePresentModalRemove}
        closeBottomUp2={closeBottomUp2}
        navigation={navigation}
        ShowPopup={onSuccess}
      /> */}
    </SafeAreaView>
  );
};
export default CreditsCardsTontine;

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

const NoteWallets = () => {
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
        <Txt color={COLORS.black}>Note:</Txt> Linking your moneytrans card to your
        tontine
      </Txt>
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
          borderRadius: 16,
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
    <>
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
      {lenght - 1 !== index ? (
        <Line height={1} color={COLORS.silverTwo} width={'80%'} />
      ) : null}
    </>
  );
};
