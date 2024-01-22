import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';
import Space from '../../../../../components/Space';
import {COLORS} from '../../../../../theme';
import {Txt} from '../../../../../components/utils';
import {PrimaryButtonLinear} from '../../../../../components/Buttons';
import ContentRenders from '../../Components/renderItems/ContentRenders';
import {UseHome} from '../../Hooks/useHooks';
import { Modalize } from 'react-native-modalize';

const ChooseTransferMode = ({navigation,handleCloseBottomSheet}) => {
  console.log('handleCloseBottomSheet', handleCloseBottomSheet)
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const modalRef2 = useRef(null);
  const modalRef3 = useRef(null);

  const {heightBottomSheet} = UseHome();
 

  const nav = (to, data) => {
    navigation.navigate(to, data);
    modalRef2.current?.close();
    modalRef3.current?.close();

  };
  return (
    <ReturnHeader
      goBack={() => {
        navigation.navigate('Home');
      }}
      title={'Transfer'}
      Cancel="Return">
        <>
        
      <View style={{backgroundColor: COLORS.finished, flex: 1, width: '100%'}}>
        <ScrollView
          ref={scrollView => (scrollView = scrollView)}
          scrollEnabled={scrollEnabled}
          contentContainerStyle={styles.container}>

          <View style={styles.channel}>
            <Txt color={COLORS.TextBody}>Please choose your transfer</Txt>
            <Space space={20}/>
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
          nav={nav}
          closeAll={() => {
            modalRef2.current?.close();
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
          nav={nav}
          closeAll={() => {
            modalRef3.current?.close();
          }}
          type={'cashout'}
          name={'cashout'}
        />
      </Modalize>
      </>

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
    paddingTop:20
  },
  container: {
    flex: 1,
  },
});
