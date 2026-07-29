import { View, Modal, Alert, Pressable, Text } from "react-native";
import { X } from "lucide-react-native";
import { FilterModalProps } from "../types/filterModal";
import { useState } from "react";
import TextField from "./TextField";

export default function FilterModal({
  modalVisible,
  setModalVisible,
  data,
  setFilteredStations,
}: FilterModalProps) {
  const [connectorType, setConnectorType] = useState("");
  const [rating, setRating] = useState("");
  const [availableSlots, setAvailableSlots] = useState("");

  function appplyFilters() {
    const filteredResult = data.filter(
      (station) =>
        station.connectorType.toLowerCase() === connectorType.toLowerCase() &&
        station.rating >= Number(rating) &&
        station.availableSlots >= Number(availableSlots),
    );

    setFilteredStations(filteredResult);
    setModalVisible(!modalVisible)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
            justifyContent:"center",
          backgroundColor: "#EBDA9D",
          width: "70%",
          height:"30%",
          marginLeft: "auto",
          borderRadius: 10,
          padding: 10,
        }}
      >
        {/* <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={{ flexDirection: "row", justifyContent: "flex-end" }}
        >
          <X />
        </Pressable> */}
        <TextField
          content="Connector Type:"
          value={connectorType}
          setValue={setConnectorType}
        />
        <TextField content="Rating:" value={rating} setValue={setRating} />
        <TextField
          content="Available Slots:"
          value={availableSlots}
          setValue={setAvailableSlots}
        />
        <Pressable
          onPress={() => appplyFilters()}
          style={{
            backgroundColor: "#09827E",
            width: 80,
            padding: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#ffffff" }}>Filter</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
