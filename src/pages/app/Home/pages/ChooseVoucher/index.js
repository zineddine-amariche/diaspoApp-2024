import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';
import {COLORS} from '../../../../../theme';
import {Txt} from '../../../../../components/utils';
import Space from '../../../../../components/Space';
import {PrimaryButtonLinear} from '../../../../../components/Buttons';
import {useNavigation} from '@react-navigation/native';

const ChooseVoucher = ({navigation, route}) => {
  const {data, ind} = route.params;

  return (
    <ReturnHeader
      goBack={() => {
        navigation.navigate('DiaspoBottomTab');
      }}
      title={'Choose a voucher'}
      Cancel="Return">
      <List data={data} ind={ind} />
    </ReturnHeader>
  );
};

export default ChooseVoucher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const List = ({data, ind}) => {
  let additionalData = {
    data,
    ind,
  };

  const list = [
    {prix: 10, img: require('../../../../../Assets/safepay/10.jpg')},
    {prix: 25, img: require('../../../../../Assets/safepay/25.jpg')},
    {prix: 50, img: require('../../../../../Assets/safepay/50.jpg')},
    {prix: 100, img: require('../../../../../Assets/safepay/100.jpg')},
  ];
  const renderItem = renderItemWrapper(list, additionalData);

  const memoizedValue = useMemo(() => renderItem, []);
  return (
    <View style={{backgroundColor: COLORS.finished, flex: 1, width: '100%'}}>
      <Space space={40} />
      <FlatList
        data={list}
        numColumns={2}
        renderItem={memoizedValue}
        dataInf={data}
        ind={ind}
      />
    </View>
  );
};

const RenderItem = ({item,extraData}) => {
  const navigation = useNavigation();
  const {data,ind}= extraData
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        elevation: 3,
        backgroundColor: COLORS.white,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        // paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <View
        style={{
          borderRadius: 8,
          overflow: 'hidden',
          height: 95,
          width: '85%',
          backgroundColor: '#110',
          flex: 1,
        }}>
        <Image
          source={item.img}
          style={{height: '100%', width: '100%'}}
          resizeMode="cover"
        />
      </View>
      <Space />
      <Txt>{item.prix}€</Txt>
      <Txt>
        {'paysafecard '}
        {item.prix}€
      </Txt>
      <Space space={15} />
      <PrimaryButtonLinear
        onPress={() => {
          navigation.navigate('TopUp', {data: data, ind});
        }}
        width={'90%'}
        disabled={true}>
        Buy
      </PrimaryButtonLinear>
    </View>
  );
};


const renderItemWrapper = (itemData, extraData) => {
  const renderItem = ({item,index}) => {
    return <RenderItem item={item} index={index} extraData={extraData} />;
  };

  return renderItem;
};
