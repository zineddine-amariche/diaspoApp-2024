import {StyleSheet, View} from 'react-native';
import React from 'react';
import CreatedSuccess from '../../../../../components/views/Layouts/AuthLayout/Model';
import {Head} from '../../../../../components/utils';
import HView from '../../../../../components/views/HView/HView';
import {
  PaleGreyButton,
  PrimaryButtonLinear,
} from '../../../../../components/Buttons';

const ModelConfirmTransfers = ({success, onDissmis, pressNo, pressYes}) => {
  return (
    <CreatedSuccess
      Visible={success}
      onDissmis={() => {
        return;
      }}>
      {BodyModelConfirmTransfers ? (
        <BodyModelConfirmTransfers
          onDissmis={onDissmis}
          pressNo={pressNo}
          pressYes={pressYes}
        />
      ) : null}
    </CreatedSuccess>
  );
};

export default ModelConfirmTransfers;

const styles = StyleSheet.create({});

const BodyModelConfirmTransfers = ({onDissmis, pressNo, pressYes}) => {
  return (
    <>
      <View style={styles.ModelContainer}>
        <Head
          //  fontFamily={'Poppins-Bold'}
          style={{padding: 20, textAlign: 'center'}}>
          Do you want to confirm this transfer ?
        </Head>

        <HView spaceBetween>
          <PaleGreyButton
            onPress={() => {
              onDissmis();
              pressNo();
            }}
            width={'48%'}>
            no
          </PaleGreyButton>
          <PrimaryButtonLinear
            disabled={true}
            width={'48%'}
            onPress={() => {
              onDissmis();
              pressYes();
            }}>
            yes
          </PrimaryButtonLinear>
        </HView>
      </View>
    </>
  );
};
