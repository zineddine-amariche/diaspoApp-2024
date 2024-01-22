import { Platform, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import PrimaryInput from "../../../../../components/Input";
import { COLORS } from "../../../../../theme";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import Space from "../../../../../components/Space";
import SelectCountry from "../../../../../components/select/SelectCountry";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Head, Txt } from "../../../../../components/utils";
import { ActivityIndicator } from "react-native-paper";
import { GOOGLE_PLACES_API_KEY } from "@env";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
  View,
  Text,
} from "react-native";

import axios from "axios";
const key = GOOGLE_PLACES_API_KEY;
const PlacesInput = ({ apiKey, onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [resultsId, setResultsId] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("step3FormData").then((data) => {
      if (data) {
        let obj = JSON.parse(data);
        setSelected(obj.streetName);
      }
    });
  }, []);

  useEffect(() => {
    setSelected("");
  }, [query]);

  const handleQueryChange = (text) => {
    setQuery(text);
    if (!text) {
      setSelected("");
      setResults([]);
    } else if (text.length > 2) {
      setLoading(true);
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${apiKey}`
        )
        .then((response) => {
          if (response.data.predictions.length > 0) {
            setLoading(false);
            return setResults(response.data.predictions);
          } else if (response.data.predictions.length === 0) {
            setLoading(false);
            return setResults([]);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  };

  const handleSelect = (result) => {
    if (Object.keys(result).length === 0) {
      setSelected("");
    } else {
      onSelect(result);
      setSelected(result.description);
      setResults([]);
      setResultsId(result?.description);
    }
  };

  const colorScheme = useColorScheme();

  return (
    <>
      <TextInput
        value={selected || query}
        onChangeText={handleQueryChange}
        placeholder={selected ? "" : "Enter your address"}
        placeholderTextColor={COLORS.silver}
        style={{
          fontWeight: selected?.length !== 0 ? "700" : "400",
          fontSize: selected?.length == 0 ? 16 : 20,
          color: colorScheme == "dark" ? COLORS.black : COLORS.dark,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.silver,
          paddingVertical: Platform.OS == "ios" ? 20 : 15,
        }}
      />

      {(loading && (
        // add the spiner at the center of the view
        <View
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          <ActivityIndicator size="small" color={COLORS.blueGreen} />
        </View>
      )) ||
        null}
      {!loading ? (
        <ScrollView horizontal contentContainerStyle={{ width: "100%" }}>
          <FlatList
            data={results}
            key={(item) => item.id}
            keyExtractor={(item) => item.place_}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={{
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.silver,
                  backgroundColor: COLORS.lightBlueGrey30,
                  borderRadius: 2,
                }}
                key={index}
              >
                <Txt
                  style={{ paddingLeft: 10 }}
                  fontSize={14}
                  numberOfLines={1}
                  color={colorScheme == "dark" ? COLORS.black : COLORS.dark}
                >
                  {item.description}
                </Txt>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      ) : null}
    </>
  );
};

const Step3 = ({
  values,
  errors,
  touched,
  setFieldValue,
  handleChange,
  handleBlur,
  setValues,
  dirty,
  step,
}) => {
  const [selectedCity, setSelectedCIty] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selected, setSelected] = useState(null);
  const [address, setAddress] = useState("");

  const onSelect = (item) => {
    setSelected(item);
  };

  const onSelectCity = (item) => {
    setSelectedCIty(item);
  };

  const onSelectState = (item) => {
    setSelectedState(item);
  };

  const { loading, message } = useSelector((state) => ({
    ...state.auth,
  }));

  return (
    <View style={{ flex: 1 }}>
      <FormInputs
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        values={values}
        errors={errors}
        step={step}
        setValues={setValues}
        dirty={dirty}
      />
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({});
const FormInputs = ({
  values,
  setFieldValue,
  errors,
  handleChange,
  touched,
  handleBlur,
  step,
  setValues,
  dirty,
}) => {
  const { streetName, postCode } = values;
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(""); // Add state for city
  const [state, setState] = useState(""); // Add state for state
  const [country, setCountry] = useState(""); // Add state for country

  const isReturns = useSelector(
    (state) => state.registerPerssisteSlice.isReturns
  );

  useEffect(() => {
    if (step === 3 && isReturns === 3) {
      AsyncStorage.getItem("step3FormData").then((data) => {
        if (data) {
          let obj = JSON.parse(data);
          setAddress(obj.streetName);
          setCity(obj.city || ""); // Set the city if available, or an empty string
          setState(obj.state || ""); // Set the state if available, or an empty string
          setCountry(obj.country || ""); // Set the country if available, or an empty string
          setValues(JSON.parse(data));
        }
      });
    }
  }, [step, dirty]);

  const handleSelect = (result) => {
    setFieldValue("streetName", result.description);
    setAddress(result.description);

    // Extract the city from the description
    const cityRegex = /,\s*([^,]+)$/; // Assumes city is after the last comma in the description
    const cityMatch = result.description.match(cityRegex);
    const selectedCity = cityMatch ? cityMatch[1] : "";

    setCity(selectedCity);
    setCountry()
    
  };

  return (
    <>
      <Space space={20} />
      <Head>Address</Head>
      <View style={{ flex: 1 }}>
        <PlacesInput
          apiKey={key}
          onSelect={handleSelect}
          streetName={address}
        />
      </View>
      <Space space={20} />
      {address && address != "" && (
        <>
          <Head>Country</Head>

          <PrimaryInput
            name={city}
            placeholder="Country"
            style={{
              fontWeight: city?.length !== 0 ? "700" : "400",
              fontSize: city?.length == 0 ? 16 : 20,
            }}
            errors={errors.country}
            touched={touched.country}
            value={city} 
            onBlur={handleBlur("city")}
            onChangeText={(text) => setCity(text)}
            placeholderTextColor={COLORS.silver}
          />

          <Head>City</Head>

          <PrimaryInput
            name={city}
            placeholder="City"
            style={{
              fontWeight: city?.length !== 0 ? "700" : "400",
              fontSize: city?.length == 0 ? 16 : 20,
            }}
            errors={errors.country}
            touched={touched.country}
            value={country} 
            onBlur={handleBlur("country")}
            onChangeText={(text) => setCountry(text)}
            placeholderTextColor={COLORS.silver}
          />
        </>
      )}

      <Space space={20} />

      <Head>Postal Code</Head>
      <View style={{ flex: 1, zIndex: -1 }}>
        <PrimaryInput
          name={postCode}
          placeholder="Postal Code"
          style={{
            fontWeight: postCode?.length !== 0 ? "700" : "400",
            fontSize: postCode?.length == 0 ? 16 : 20,
          }}
          errors={errors.postCode}
          touched={touched.postCode}
          value={postCode}
          onBlur={handleBlur("postCode")}
          onChangeText={handleChange("postCode")}
          placeholderTextColor={COLORS.silver}
        />
      </View>
    </>
  );
};
