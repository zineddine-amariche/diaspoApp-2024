import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CreatedSuccess from '../../../../../../components/views/Layouts/AuthLayout/Model';
import {PrimaryButtonLinear} from '../../../../../../components/Buttons';
import HView from '../../../../../../components/views/HView/HView';
import {Head} from '../../../../../../components/utils';

import illusphone from '../../../../../../Assets/Img/illusphone.png';

const ModelCodeDigit = ({success, onDissmis, pressNo, pressYes}) => {
  return (
    <CreatedSuccess
      Visible={success}
      onDissmis={() => {
        // onDissmis();
        // pressNo();
        return;
      }}>
      {BodyModelConfirmToCreate ? (
        <BodyModelConfirmToCreate
          onDissmis={onDissmis}
          pressNo={pressNo}
          pressYes={pressYes}
        />
      ) : null}
    </CreatedSuccess>
  );
};

export default ModelCodeDigit;

const styles = StyleSheet.create({});

const BodyModelConfirmToCreate = ({onDissmis, pressYes}) => {
  return (
    <>
      <View style={styles.ModelContainer}>
        <Image source={illusphone} style={{width: '100%'}} />

        <Head style={{padding: 20, textAlign: 'center'}}>
          congrats your account is reloaded by the voucher of 50€
        </Head>

        <HView spaceBetween>
          <PrimaryButtonLinear
            disabled={true}
            width={'100%'}
            onPress={() => {
              onDissmis();
            }}>
            CLOSE
          </PrimaryButtonLinear>
        </HView>
      </View>
    </>
  );
};
