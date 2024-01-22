import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ReturnHeader from './ReturnHeader';
import {Modalize} from 'react-native-modalize';

const BTHeader = ({
  goBack,
  title,
  Loading,
  sousTitre,
  Notifications,
  sousTontine,
  TextIn,
}) => {
  const bottomSheetData = [
    {id: 1, title: 'Bottom Sheet 1', content: 'Content for Bottom Sheet 1'},
    {id: 2, title: 'Bottom Sheet 2', content: 'Content for Bottom Sheet 2'},
    {id: 3, title: 'Bottom Sheet 3', content: 'Content for Bottom Sheet 3'},
  ];

  const [openBottomSheetId, setOpenBottomSheetId] = useState(null);
  const modalRefs = useRef([]);

  const openBottomSheet = id => {
    setOpenBottomSheetId(id);
    modalRefs.current[id]?.open();
  };

  const closeBottomSheet = id => {
    setOpenBottomSheetId(null);
    modalRefs.current[id]?.close();
  };

  const renderBottomSheets = () => {
    return bottomSheetData.map(data => {
      const {id, title, content} = data;

      return (
        <View key={id}>
          <TouchableOpacity onPress={() => openBottomSheet(id)}>
            <Text>{title}</Text>
          </TouchableOpacity>
          <Modalize
            ref={ref => (modalRefs.current[id] = ref)}
            onClosed={() => closeBottomSheet(id)}
            // Additional props for styling and content
          >
            <Text>{content}</Text>
          </Modalize>
        </View>
      );
    });
  };

  return (
    <>
    
    <View style={{flex: 1}}>
      <ReturnHeader
        goBack={goBack}
        title={title}
        Loading={Loading}
        sousTitre={sousTitre}
        Notifications={Notifications}
        sousTontine={sousTontine}
        TextIn={TextIn}
      />
    </View>
      <View style={styles.body}>{renderBottomSheets()}</View>
    </>

  );
};

export default BTHeader;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
      },
});
