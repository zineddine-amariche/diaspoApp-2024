import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {Head, Txt} from '../utils';
import * as Animatable from 'react-native-animatable';
import {COLORS} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import Space from '../Space';
import {CCA2} from '../../redux/Features/authentification/Register/Slice';
import CountryPicker from 'react-native-country-picker-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrimaryInput from '.';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getCCA2 } from '../../redux/Features/authentification/Register/perssistingRegisterInputs';

const InputPhone = ({
  Label,
  name,
  value,
  placeholder,
  onBlur,
  onChangeText,
  width,
  check,
  style,
  hidePass,
  isPassword,
  HandlehidePass,
  errors,
  touched,
  placeholderTextColor,
  editable,
  keyboardType,
  phoneInputRef,
  // onChangeFormattedText,
  setFieldValue,
  formattedValue,
  setFormattedValue,
  setUpdate,
  Update,
  mobileNumber,
  handleBlur,
  handleChange,
}) => {
  // useEffect(() => {
  //   if (value) {
  //     // onChangeFormattedText(value);

  //     // console.log('value', value)
  //     onChangeFormattedText(value);
  //   }
  // }, [value]);
  const isReturns = useSelector(
    state => state.registerPerssisteSlice.isReturns,
  );
  // console.log('isReturns', isReturns)
  const colorScheme = useColorScheme();
  const dispatch = useDispatch()

  // console.log('colorScheme', colorScheme)
  // console.log('Update', Update)
  // console.log('isReturns', isReturns)
  // console.log('formattedValue', formattedValue);
  // console.log('value', value);

  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = country => {
    // console.log('country', country);
    console.log(country.callingCode[0]);
    dispatch(getCCA2(country))
    if (country.callingCode[0]) {
      setSelectedCountry(`+${country.callingCode[0]}`);
    } else {
      alert('Please select a country with a valid calling code');
    }
    // Update the selected country code state
  };

  const handleOpenCountryPicker = () => {
    setIsCountryPickerOpen(true);
  };

  const handleCloseCountryPicker = () => {
    setIsCountryPickerOpen(false);
  };

  const CCA2 = useSelector(
    state => state.registerPerssisteSlice.CCA2.callingCode[0],
  );
  // console.log('CCA2', CCA2);

  return (
    <>
      <View style={styles.containerForm} {...style}>
        {Label ? <Head>{Label}</Head> : null}
        <View style={{position: 'relative', backgroundColor: COLORS.white}}>
          {formattedValue &&
          value &&
          formattedValue === value &&
          isReturns == 2 &&
          !Update &&
          !errors ? (
            <TouchableOpacity
              onPress={() => {
                setUpdate(true);
              }}
              style={{
                paddingVertical: 20,
                paddingHorizontal: 10,
                marginTop: 10,
                borderBottomWidth: 1,
                paddingVertical: Platform.OS == 'ios' ? 20 : 20,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  color: colorScheme == 'dark' ? COLORS.dark : COLORS.black,
                }}>
                {formattedValue}
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              <Space />

              {isCountryPickerOpen && (
                <CountryPicker
                  // ... CountryPicker props
                  visible={isCountryPickerOpen}
                  onClose={handleCloseCountryPicker}
                  onSelect={handleCountrySelect}
                />
              )}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={handleOpenCountryPicker}>
                  <View style={styles.countryPickerText}>
                    {selectedCountry ? (
                      <View
                        style={{
                          margin: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Txt
                          color={COLORS.coolGrey}
                          style={{paddingRight: 1}}
                          Bold={'800'}>{`${selectedCountry}`}</Txt>
                        <AntDesign
                          color={COLORS.coolGrey}
                          name="caretdown"
                          size={14}
                          style={{marginLeft: 5}}
                        />
                      </View>
                    ) : (
                      <View
                        style={{
                          margin: 3,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Txt
                          color={COLORS.coolGrey}
                          Bold={'800'}>{`+${CCA2}`}</Txt>
                        <AntDesign
                          color={COLORS.coolGrey}
                          name="caretdown"
                          size={14}
                          style={{marginLeft: 5}}
                        />
                      </View>
                    )}
                  </View>
                  {/* <Text>{selectedCountry.name} - {selectedCountry.code}</Text> */}
                </TouchableOpacity>
                <PrimaryInput
                  name={mobileNumber}
                  // Label={'Phone number'}
                  placeholder="Your Phone number"
                  style={{
                    fontWeight: mobileNumber?.length !== 0 ? '700' : '400',
                    fontSize: mobileNumber?.length == 0 ? 16 : 20,
                  }}
                  errors={errors?.mobileNumber}
                  touched={touched?.mobileNumber}
                  value={mobileNumber}
                  onBlur={onBlur}
                  onChangeText={onChangeText}
                  width="48%"
                  placeholderTextColor={COLORS.silver}
                  keyboardType="phone-pad"
                />
              </View>

              {/* <PhoneInput
                ref={phoneInputRef}
                defaultCode={CCA2}
                layout="second"
                onChangeFormattedText={onChangeFormattedText}
                withDarkTheme
                containerStyle={{
                  alignSelf: 'center',
                  elevation: 0,
                  borderBottomColor: COLORS.silver,
                  borderBottomWidth: 1,
                  flex: 1,
                }}
                textContainerStyle={{
                  color: colorScheme == 'dark' ? COLORS.dark : COLORS.black,
                  paddingBottom: 6,
                  backgroundColor: COLORS.white,
                }}
                textInputStyle={{
                  color: colorScheme == 'dark' ? COLORS.dark : COLORS.silver,
                  marginTop: Platform.OS == 'ios' ? -15 : -13,
                  flex: 1,
                  paddingVertical: Platform.OS == 'ios' ? 18 : 10,
                }}
                inputStyle={{
                  backgroundColor: '#fff',
                }}
                codeTextStyle={{}}
                disableArrowIcon={false}
                textProps={{
                  placeholder: 'Enter a phone number...',
                  style: {
                    color: colorScheme == 'dark' ? COLORS.dark : COLORS.black,
                  },
                }}
              /> */}
            </>
          )}
        </View>
      </View>

      {errors ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.error}>{errors} </Text>
        </Animatable.View>
      ) : null}
    </>
  );
};

export default InputPhone;

const styles = StyleSheet.create({
  error: {
    color: COLORS.coral,
    fontSize: 13,
    marginVertical: 5,
  },
});
