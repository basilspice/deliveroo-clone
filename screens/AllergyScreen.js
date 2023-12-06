import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const AllergyScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>AllergyScreen</Text>
    </View>
  );
};

export default AllergyScreen;
