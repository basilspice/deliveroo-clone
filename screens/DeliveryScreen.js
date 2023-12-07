import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className=" bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <Text>Order Help</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
