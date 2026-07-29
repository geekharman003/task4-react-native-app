import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { GET_STATIONS } from "../graphql/queries";
import StationCard from "../components/StationCard";
import { Station } from "../types/station";
import SearchBar from "../components/SearchBar";
import FilterModal from "../components/FilterModal";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function StationListScreen() {
  const { loading, error, data } = useQuery<{ stations: Station[] }>(
    GET_STATIONS,
  );
  const [filteredStations, setFilteredStations] = useState<Station[] | []>([]);
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    setFilteredStations(data?.stations || []);
  }, [data]);

  function searchStations(value: string) {
    setText(value);

    const filteredResult = data?.stations.filter(
      (station) =>
        station.name.toLowerCase().includes(value.toLowerCase()) ||
        station.address.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredResult) {
      setFilteredStations(filteredResult);
    }
  }

  if (loading) return <Text>Loading Stations...</Text>;
  if (error) return <Text>Error while loading Stations</Text>;

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        List of Stations
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <SearchBar value={text} searchStations={searchStations} />
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E8D261",
            width: "auto",
            height: "auto",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text>Apply Filters</Text>
        </Pressable>
        <Pressable
          onPress={() => setFilteredStations(data?.stations || [])}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E67715",
            width: "auto",
            height: "auto",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text>Clear Filters</Text>
        </Pressable>
        <FilterModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          data={data?.stations || []}
          setFilteredStations={setFilteredStations}
        />
      </View>
      {filteredStations && filteredStations.length ? (
        <FlatList
          data={filteredStations}
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
