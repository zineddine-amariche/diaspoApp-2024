import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../../../theme';
import ViewT1 from '../../../../../../../components/views/CardViewType1';
import {Txt} from '../../../../../../../components/utils';
import Space from '../../../../../../../components/Space';
import HView from '../../../../../../../components/views/HView/HView';
import imgInfo from '../../../../../../../Assets/Img/icon24Info2.png';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';

const DetailsTontine = ({
  tontineProjectInfo,
  onSuccess,
  TextIn,
  asAPayer,
  listOfParticipants,
}) => {
  let colorText =
    tontineProjectInfo?.project?.status === 'ACTIVATED'
      ? COLORS.greenishTeal
      : tontineProjectInfo?.project?.status === 'IN PROGRESS'
      ? COLORS.orangeYellow
      : tontineProjectInfo?.project?.status === 'CANCELLED'
      ? COLORS.coral
      : COLORS.silver;

  let startDate = moment.unix(tontineProjectInfo?.project?.startAt);
  let formattedDate = startDate.format('lll');
  return (
    <View style={{paddingHorizontal: 20}}>
      <Space />
      <Details
        colorText={colorText}
        formattedDate={formattedDate}
        tontineProjectInfo={tontineProjectInfo}
        onSuccess={onSuccess}
        TextIn={TextIn}
      />
      <Space space={10} />
      <BodyNotes listOfParticipants={listOfParticipants}  asAPayer={asAPayer}/>
    </View>
  );
};

export default DetailsTontine;

const styles = StyleSheet.create({
  img: {
    marginRight: 10,
  },
});

const Notes = () => {
  return (
    <View style={{paddingVertical: 30}}>
      <Txt Bold={'600'} color={COLORS.BlackModal}>
        As a Tontine Manager, you’re creating a Tontine. Make sure that your
        create a Tontine with participants your “Trustly” and “Only” know.
        {'\n'} {'\n'}
        With the Tontine there is a risk that you know of payment failures when
        you don’t know participants.
      </Txt>
    </View>
  );
};

const Details = ({
  TextIn,
  onSuccess,
  tontineProjectInfo,
  formattedDate,
  colorText,
}) => {
  return (
    <ViewT1>
      <Txt fontSize={17}>Tontine Details</Txt>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Status
        </Txt>
        <View style={styles.etat}>
          <Txt color={colorText}>{TextIn}</Txt>
        </View>
      </HView>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Created time
        </Txt>
        <Txt fontSize={14} color={COLORS.darkBlueGrey}>
          {moment(tontineProjectInfo?.project?.createdAt).format('lll')}
        </Txt>
      </HView>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Created by
        </Txt>
        <TouchableOpacity onPress={onSuccess}>
          <HView>
            <Image source={imgInfo} style={styles.img} />
            <Txt fontSize={14} color={COLORS.darkBlueGrey} lineHeight={20}>
              {tontineProjectInfo?.payers[0]?.details?.firstName}{' '}
              {tontineProjectInfo?.payers[0]?.details?.lastName}
            </Txt>
          </HView>
        </TouchableOpacity>
      </HView>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Amount per person
        </Txt>
        <Txt fontSize={14} color={COLORS.darkBlueGrey}>
          {tontineProjectInfo?.project?.amount} euro
        </Txt>
      </HView>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Retention rate
        </Txt>
        <Txt fontSize={14} color={COLORS.darkBlueGrey}>
          {tontineProjectInfo?.project?.retentionRate} %
        </Txt>
      </HView>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Frequency of payment
        </Txt>
        <Txt fontSize={14} color={COLORS.darkBlueGrey}>
          {tontineProjectInfo?.project?.frequencyOfPayment}
        </Txt>
      </HView>
      <Space space={10} />

      <HView spaceBetween>
        <Txt fontSize={14} color={COLORS.coolGrey}>
          Started date
        </Txt>
        <Txt fontSize={14} color={COLORS.darkBlueGrey}>
          {formattedDate}
        </Txt>
      </HView>
    </ViewT1>
  );
};

const BodyNotes = ({asAPayer, listOfParticipants}) => {
  if (asAPayer) {
    if (listOfParticipants > 1) {
      null;
    } else {
      return <Notes />;
    }
  } else {
    if (listOfParticipants > 1) {
      null;
    } else {
      return <Notes />;
    }
  }
};
