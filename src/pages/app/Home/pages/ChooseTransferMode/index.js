import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';
import Space from '../../../../../components/Space';
import {COLORS} from '../../../../../theme';
import {Txt} from '../../../../../components/utils';
import {PrimaryButtonLinear} from '../../../../../components/Buttons';
import ContentRenders from '../../Components/renderItems/ContentRenders';
import {UseHome} from '../../Hooks/useHooks';
import {Modalize} from 'react-native-modalize';

const ChooseTransferMode = ({navigation}) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [step, setstep] = useState(1);
  const [Title, setTitle] = useState(null);

  const modalRef2 = useRef(null);
  const modalRef3 = useRef(null);

  const {heightBottomSheet} = UseHome();

  const nav = (to, data) => {
    navigation.navigate(to, data);
    modalRef2.current?.close();
    modalRef3.current?.close();
  };

  const onValid = (i, ind, type) => {
    // console.log('i,ind,type', i, ind, type);

    let title = i.name == 'Main Account' ? 'Smile Account' : 'Tontine Account';
    setstep(2);
    setTitle(title);
    modalRef2.current?.close();
    modalRef3.current?.close();
  };

  const renderStep = step => {
    switch (step) {
      case 1:
        return <Step1 modalRef2={modalRef2} modalRef3={modalRef3} />;
      case 2:
        return <Step2  />;

      default:
        return null;
    }
  };
  return (
    <ReturnHeader
      goBack={() => {
        navigation.navigate('DiaspoBottomTab');
        setstep(1);
        setTitle(null);
      }}
      title={Title ? Title : 'Transfer'}
      Cancel="Return">
      <View style={{backgroundColor: COLORS.finished, flex: 1, width: '100%'}}>
        <ScrollView
          ref={scrollView => (scrollView = scrollView)}
          scrollEnabled={scrollEnabled}
          contentContainerStyle={styles.container}>
          {renderStep(step, modalRef2, modalRef3)}
        </ScrollView>
      </View>
      <Modalize
        snapPoint={heightBottomSheet}
        ref={modalRef3}
        overlayStyle={{
          backgroundColor: COLORS.blueGreenOpacity9,
        }}
        adjustToContentHeight={false}>
        <ContentRenders
          slice={2}
          onValid={onValid}
          nav={nav}
          closeAll={() => {
            modalRef3.current?.close();
          }}
          type={'transfert'}
          name={'transfer'}
        />
      </Modalize>

      <Modalize
        snapPoint={heightBottomSheet}
        ref={modalRef2}
        overlayStyle={{
          backgroundColor: COLORS.blueGreenOpacity9,
        }}
        adjustToContentHeight={false}>
        <ContentRenders
          onValid={onValid}
          slice={2}
          nav={nav}
          closeAll={() => {
            modalRef2.current?.close();
          }}
          type={'cashout'}
          name={'cashout'}
        />
      </Modalize>
    </ReturnHeader>
  );
};

export default ChooseTransferMode;

const styles = StyleSheet.create({
  channel: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLORS.finished,
  },
  container: {
    flex: 1,
  },
});

const Step1 = ({modalRef2, modalRef3}) => {
  return (
    <>
      <Space space={Platform.OS == 'android' ? 60 : 40} />

      <View style={styles.channel}>
        <Txt color={COLORS.TextBody}>Please choose your transfer</Txt>

        <Space space={40} />
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            modalRef2.current?.open();
          }}>
          Transfer to my account
        </PrimaryButtonLinear>
        <Space space={20} />
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            modalRef3.current?.open();
          }}>
          Transfer to someone else{' '}
        </PrimaryButtonLinear>
        <Space space={40} />
      </View>
    </>
  );
};

const Step2 = () => {
  return (
    <>
      <Space space={Platform.OS == 'android' ? 60 : 40} />

      <View style={styles.channel}>
        <Txt color={COLORS.TextBody}>Please choose your transfer</Txt>

        <Space space={40} />
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            return;
          }}>
          Make a “Bank transfer”{' '}
        </PrimaryButtonLinear>
        <Space space={20} />
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            return;
          }}>
          International Moneytransfers
        </PrimaryButtonLinear>
        <Space space={20} />
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            return;
          }}>
          Sending a Recharge
        </PrimaryButtonLinear>
        <Space space={20} />
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            return;
          }}>
          Cashout through Smile account QR Code
        </PrimaryButtonLinear>
        <Space space={40} />
      </View>
    </>
  );
};
