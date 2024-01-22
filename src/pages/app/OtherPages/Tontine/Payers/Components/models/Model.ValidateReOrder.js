import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import illusphone from '../../../../../../../Assets/Img/illusphone.png';
 
import CreatedSuccess from '../../../../../../../components/views/Layouts/AuthLayout/Model';
import { Head } from '../../../../../../../components/utils';
import HView from '../../../../../../../components/views/HView/HView';
import { PaleGreyButton, PrimaryButtonLinear } from '../../../../../../../components/Buttons';

const ModelValidateReoder = ({success, onDissmis, pressNo, pressYes}) => {
  return (
    <CreatedSuccess
      Visible={success}
      onDissmis={() => {
        return
      }}>
      {BodyModelValidateReOrder ? (
        <BodyModelValidateReOrder
          onDissmis={onDissmis}
          pressNo={pressNo}
          pressYes={pressYes}
        />
      ) : null}
    </CreatedSuccess>
  );
};

export default ModelValidateReoder;

const styles = StyleSheet.create({});

const BodyModelValidateReOrder = ({onDissmis, pressNo, pressYes}) => {
  return (
    <>
      <View style={styles.ModelContainer}>
      <Image source={illusphone} style={{width: '100%'}} />

        <Head
          //fontFamily={'Poppins-Bold'}
          style={{padding: 20, textAlign: 'center'}}>
                   Reorder validated successfully

        </Head>

        {/* <HView spaceBetween>
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
        </HView> */}
           <PrimaryButtonLinear
            onPress={() => {
              onDissmis();
              pressYes();
            }}
            width={'100%'}
            disabled={true}
            >
            VALIDATE
          </PrimaryButtonLinear>
      </View>
    </>
  );
};
