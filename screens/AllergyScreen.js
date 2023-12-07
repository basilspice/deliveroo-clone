import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";
import {XCircleIcon} from "react-native-heroicons/solid"

const AllergyScreen = () => {

const navigation = useNavigation();


  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center ">
      <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 mb-10 "
          >
      <XCircleIcon size={40} color="black"/>
     </TouchableOpacity>
      <Animatable.Image
        source={require("../assets/allergys.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-75 w-100"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center"
      >
        Bummer
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default AllergyScreen;