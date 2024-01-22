import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';
import { useSelector } from 'react-redux';
import {COLORS} from '../../../../../theme';
import SearchHeader from './components/SearchHeader';
// import CustomHeader from './components/CustomHeader';

const SearchLayout = ({children,onPress,title}) => {
  const {connectedUsers, loading} = useSelector(state => ({
    ...state.userApp,
  }));
 
  return (
    <View style={styles.container}>
      <SearchHeader onPress={onPress}  title={title} />
      {/* {children} */}
    </View>
  );
};

export default SearchLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paleGrey,
  },
});
