import { View, Text } from "react-native";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { GET_STATION, TOGGLE_FAVOURITE } from "../graphql/queries";
import FavouriteButton from "../components/FavouriteButton";

type Station = {
  id: number;
  name: string;
  address: string;
  city: string;
  description: string;
  connectorType: string;
  availableSlots: number;
  amenities: string[];
  rating: number;
  reviews: number;
  isFavourite: boolean;
};

type RootStackParamList = {
  StationDetailsScreen: {
    id: number;
  };
};

type StationDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "StationDetailsScreen"
>;

export default function StationDetailsScreen() {
  const route = useRoute<StationDetailsScreenRouteProp>();
  const { loading, error, data } = useQuery<{ station: Station }>(GET_STATION, {
    variables: { id: route?.params?.id },
  });

  const [toggle] = useMutation(TOGGLE_FAVOURITE);

  async function toggleFavourite() {
    setIsFavourite((prev) => !prev);

    try {
      await toggle({ variables: { stationId: route?.params?.id } });
    } catch (error) {
      console.log("error occured:", error);
    }
  }
  const [isFavourite, setIsFavourite] = useState(false);
  if (loading) return <Text>Loading Details...</Text>;
  if (error) return <Text>Error during fetching details</Text>;

  return (
    <View style={{ borderWidth: 1, padding: 10 }}>
      <Text>Station ID:{data?.station.id}</Text>
      <Text>Name:{data?.station.name}</Text>
      <Text>Address:{data?.station.address}</Text>
      <Text>City:{data?.station.city}</Text>
      <Text>description:{data?.station.description}</Text>
      <Text>Connector Type:{data?.station.connectorType}</Text>
      <Text>Available Slots:{data?.station.availableSlots}</Text>
      {/* <Text>Amenities:{data?.amenities}</Text> */}
      <Text>Rating:{data?.station.rating}</Text>
      <Text>Reviews:{data?.station.reviews}</Text>
      <Text>is Favourite:{data?.station.isFavourite}</Text>
      <FavouriteButton
        isFavourite={isFavourite}
        setIsFavourite={setIsFavourite}
        onPress={toggleFavourite}
      />
    </View>
  );
}
