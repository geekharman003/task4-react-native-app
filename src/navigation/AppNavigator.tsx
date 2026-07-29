import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import StationListScreen from "../screens/StationListScreen";
import StationDetailsScreen from "../screens/StationDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  StationList: undefined;
  StationDetailsScreen: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="StationList"
          component={StationListScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="StationDetailsScreen"
          component={StationDetailsScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
