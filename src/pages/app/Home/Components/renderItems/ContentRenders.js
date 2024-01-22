import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HView from '../../../../../components/views/HView/HView';
import {Head, Txt} from '../../../../../components/utils';
import {COLORS} from '../../../../../theme';
import Space from '../../../../../components/Space';
import {WhiteButton} from '../../../../../components/Buttons';
import {useDispatch, useSelector} from 'react-redux';
import Intl from 'intl';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {getBalance} from '../../../../../redux/Features/Payements/getPayementMethods/slice';

const ContentRenders = ({onPressPaySafeCard, type, name, closeAll, slice, onValid}) => {
  const {walletAccount} = useSelector(state => state.walletAccounts);

  const dispatch = useDispatch();
  let dataV = walletAccount?.walletAccounts?.slice(0, slice);
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: 16,
          marginTop: 20,
        }}>
        <Head style={styles.Head}>Select an account to {name}</Head>
        {walletAccount ? (
          <ScrollView>
            {dataV?.map((i, ind) => {
              const formattedNumber = new Intl.NumberFormat('en-US', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(i?.balance / 100);
              return (
                <TouchableOpacity
                  key={ind}
                  onPress={() => {
                    dispatch(getBalance(i.balance));
                    if (ind == 2) {
                      onPressPaySafeCard(i, ind, type)
                    } else {
                      onValid(i, ind, type);
                    }
                  }}>
                  <View
                    spaceBetween
                    style={[
                      styles.item,
                      {
                        backgroundColor: COLORS.paleGreyTwo,
                      },
                    ]}>
                    <HView>
                      <View
                        style={[
                          styles.Point,
                          {
                            backgroundColor: COLORS.orangeYellow,
                          },
                        ]}></View>
                      <Txt
                        fontSize={17}
                        // color={
                        //   i.accountType == 'tontine'
                        //     ? COLORS.gray
                        //     : COLORS.orangeYellow
                        // }

                        color={COLORS.orangeYellow}>
                        {i.name == 'Main Account'
                          ? 'Smile Account'
                          : ind == 1
                          ? 'Tontine Account'
                          : ind == 2
                          ? 'PaysafeCard'
                          : 'Paypal'}
                      </Txt>
                    </HView>
                    <View>
                      <Txt
                        color={
                          i.accountType == 'tontine'
                            ? COLORS.gray
                            : COLORS.blueGreen
                        }
                        style={{lineHeight: 40, fontSize: 17}}>
                        {i.price}
                      </Txt>
                      <Txt
                        // color={
                        //   i.accountType == 'tontine'
                        //     ? COLORS.gray
                        //     : COLORS.greyblue
                        // }
                        color={COLORS.greyblue}
                        style={{
                          lineHeight: 24,
                          fontSize: 16,
                          alignSelf: 'flex-end',
                        }}>
                        {formattedNumber == 0.0
                          ? '£ 0'
                          : ` £ ${formattedNumber}`}
                      </Txt>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <View
            style={{
              flexGrow: 1,
              padding: 30,
              alignItems: 'center',
              height: 200,
              justifyContent: 'center',
            }}>
            <Txt>no data</Txt>
          </View>
        )}

        <WhiteButton onPress={closeAll}>cancel</WhiteButton>
        <Space space={90} />
      </View>
    </>
  );
};

export default ContentRenders;

const styles = StyleSheet.create({
  Point: {
    height: 7,
    width: 7,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 3,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    height: 80,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  Head: {
    alignSelf: 'center',
    paddingVertical: 10,
  },
});
