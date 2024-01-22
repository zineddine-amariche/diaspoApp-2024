import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import SearchHeader from '../../../../../components/views/Layouts/AppLayout/ScreenLayout/components/SearchHeader';
import {
  deleteSelectedList,
  resetBeneficaire,
} from '../../../../../redux/Features/Tontine/ManageBenefeciare/ManageStatesBeneficiare';
import {COLORS} from '../../../../../theme';
import Benefeciare from '../Benefeciare/SelectBenefeciare';
import Payer from '../Payers/SelectPayers';

const durationMs = 350;

const BenefeLayout = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {connectedUsers} = useSelector(state => ({
    ...state.userApp,
  }));

  const [searchResults, setSearchResults] = useState(connectedUsers);

  const onPress = () => {
    navigation.navigate('Tontine');
    setTimeout(
      () => dispatch(resetBeneficaire(), dispatch(deleteSelectedList())),
      durationMs,
    );
  };
  const {title} = route.params;
  const dataRoute = route.params;

  const [searchInput, setSearchInput] = useState('');

  const handleSearch = inputValue => {
    setSearchInput(inputValue);

    // // Filter the data array based on the search input
    const filteredData = connectedUsers.filter(
      item =>
        item.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.lastName.toLowerCase().includes(inputValue.toLowerCase()) 
        // item.mobileNumber.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setSearchResults(filteredData);
  };

  useEffect(() => {
    if (!searchResults) {
      setSearchResults(connectedUsers);
    }
  }, [connectedUsers]);

  return (
    <View style={styles.container}>
      <SearchHeader
        title={title}
        onPress={onPress}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <Benefeciare connectedUsers={searchResults} dataRoute={dataRoute} navigation={navigation} />
    </View>
  );
};

export default BenefeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paleGrey,
  },
});
