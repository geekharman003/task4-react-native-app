import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { GET_FAVOURITE_STATIONS } from "../graphql/queries";
import { Station } from "../types/station";
import StationCard from "../components/StationCard";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function FavouriteStationsScreen() {
  const { loading, error, data } = useQuery<{
    favouriteStations: Station[];
  }>(GET_FAVOURITE_STATIONS,{fetchPolicy:"network-only"});
  const [favouriteStations, setFavouriteStations] = useState<Station[] | []>(
    [],
  );

  type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProps>();


  useEffect(() => {
    setFavouriteStations(data?.favouriteStations || []);
  }, [data]);

  if (loading) return <Text>Loading Favourites...</Text>;
  if (error) return <Text>Error during loading favourites</Text>;

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        List of Favourite Stations
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      ></View>
      {favouriteStations && favouriteStations.length ? (
        <FlatList
          data={favouriteStations}
          renderItem={({ item }) => (
            <StationCard
              name={item.name}
              address={item.address}
              distance={item.distance}
              connectorType={item.connectorType}
              availableSlots={item.availableSlots}
              rating={item.rating}
              onPress={() =>
                navigation.navigate("StationDetailsScreen", { id: item.id })
              }
            />
          )}
        />
      ) : (
        <Text>No Stations Found</Text>
      )}
    </View>
  );
}
