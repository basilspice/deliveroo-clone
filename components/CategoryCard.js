import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";

const CategoryCard = ({id, imgUrl, title }) => {
  return (
    <TouchableOpacity
      
      className="px-1"
    >
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded " />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-xs">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
