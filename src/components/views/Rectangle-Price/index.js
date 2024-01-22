import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HView from '../HView/HView';
import {COLORS, SIZES} from '../../../theme';
import {Txt} from '../../utils';
import icon24MoreDefault from '../../../Assets/Img/icon24MoreDefault.png';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Tooltip from 'react-native-walkthrough-tooltip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Intl from 'intl';

import 'intl';
import 'intl/locale-data/jsonp/en';

const AccountsBox = ({onPress}) => {
  const {walletAccount} = useSelector(state => state.walletAccounts);
  let dataV = walletAccount?.walletAccounts?.slice(0, 2);
  return (
    <>
      <MyTooltip />
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          paddingRight: 20,
          marginBottom: 3,
        }}
        showsHorizontalScrollIndicator={false}>
        {dataV?.map((i, ind) => {
          return (
            <View key={ind} style={{marginBottom: 3}}>
              <RenderItems item={i} ind={ind} onPress={onPress} />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default AccountsBox;

const RenderItems = ({ind, item,onPress}) => {
  const {t, i18n} = useTranslation();

  if (typeof Intl === 'undefined') {
    // Use the Intl.js polyfill if Intl is not defined
    // You can customize the polyfill by passing options to the constructor
    var IntlPolyfill = require('intl');
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(item?.balance / 100);

  return (
    <>
      <View style={styles.container}>
        <HView spaceBetween>
          <View style={{marginRight: 29}}>
            <HView>
              <View style={styles.Point}></View>
              <Txt fontSize={17} color={COLORS.orangeYellow}>
                {item.name == 'Main Account'
                  ? 'Bongo account'
                  : ind == 1
                  ? 'Second account'
                  : item.name}
              </Txt>
            </HView>
            <HView>
              <Txt
                color={COLORS.blueGreen}
                style={{lineHeight: 40, fontSize: 32, marginTop: 10}}>
                {formattedNumber == 0.0 ? '0' : formattedNumber}{' '}
              </Txt>
              <Txt
                color={COLORS.greyblue}
                style={{lineHeight: 24, fontSize: 17}}>
                euro
              </Txt>
            </HView>
          </View>

          <TouchableOpacity
            // onPress={onPress}
            disabled={ind == 1 ? true : false}
            onPress={() => {
              // console.log('item', item);
              // onPress('CashOut', {data: item});
              onPress('TopUp', {data: item});

            }}>
            <View
              style={[
                styles.Box,
                {
                  backgroundColor: ind == 1 ? COLORS.finished : COLORS.paleGrey,
                },
              ]}>
              <Image source={icon24MoreDefault} />
            </View>
          </TouchableOpacity>
        </HView>
        <View></View>
      </View>
    </>
  );
};

const MyTooltip = () => {
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('viewWallets').then(data => {
      if (data) {
        setvisible(false);
      } else {
        setvisible(true);
      }
    });
  }, []);

  return (
    <Tooltip
      isVisible={visible}
      content={
        <View style={{}}>
          <Txt fontSize={14}> to see more wallets !</Txt>
        </View>
      }
      placement="top"
      displayInsets={{top: 180, bottom: 24, left: 24, right: 120}}
      onClose={() => {
        setvisible(false);
        AsyncStorage.setItem('viewWallets', 'true');
      }}></Tooltip>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    elevation: 3,
    zIndex: -1,
    alignSelf: 'center',
    width: SIZES.width - 70,
    zIndex: -1,
    marginLeft: 15,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  Box: {
    height: 40,
    width: 40,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  Point: {
    height: 7,
    width: 7,
    borderRadius: 8,
    backgroundColor: COLORS.orangeYellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 3,
  },
});
