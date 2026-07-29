import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function HomeScreen() {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("StationList")}
        style={[styles.button, styles.allStationsBtn]}
      >
        <Text style={{ textAlign: "center" }}>View All Stations</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.myfavouritesBtn]}>
        <Text style={{ color: "#ffffff", textAlign: "center" }}>
          View My Favourites
        </Text>
      </Pressable>
      <Pressable style={[styles.button, styles.myBookingsBtn]}>
        <Text style={{ textAlign: "center" }}>View My Bookings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: "auto",
    borderRadius: 10,
    padding: 10,
  },
  allStationsBtn: {
    backgroundColor: "skyblue",
  },
  myfavouritesBtn: {
    backgroundColor: "green",
  },
  myBookingsBtn: {
    backgroundColor: "yellow",
  },
});
