import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
const items = useSelector(selectBasketItems);
const navigation = useNavigation();
const basketTotal = useSelector(selectBasketItems);


  return (
    <Text>BasketIcon</Text>
  );
};

export default BasketIcon;