import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';
import {useSelector} from 'react-redux';
import SearchHeader from '../../../../../components/views/Layouts/AppLayout/ScreenLayout/components/SearchHeader';
import {COLORS} from '../../../../../theme';
import Payer from '../Payers/SelectPayers';
import {useAddNewPersson} from '../Payers/SelectPayers/Hooks';

const PayersLayout = ({onPress, title, navigation,route}) => {
  const {connectedUsers, loading} = useSelector(state => ({
    ...state.userApp,
  }));

  const [searchResults, setSearchResults] = useState(connectedUsers);

  const {goBackFun} = useAddNewPersson();

  const dataRoute = route.params;

  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (inputValue) => {
    setSearchInput(inputValue);

    // // Filter the data array based on the search input
    const filteredData = connectedUsers.filter((item) =>
    item.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
    item.lastName.toLowerCase().includes(inputValue.toLowerCase())
    // item.mobileNumber.toLowerCase().includes(inputValue.toLowerCase())
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
        title={'Select Payers'}
        onPress={goBackFun}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <Payer connectedUsers={searchResults} dataRoute={dataRoute} 
       navigation={navigation} />
    </View>
  );
};

export default PayersLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paleGrey,
  },
});
