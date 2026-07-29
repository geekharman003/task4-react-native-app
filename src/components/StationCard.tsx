import { Text, Pressable } from "react-native";
import React from "react";
import { StationCardProps } from "../types/station";

export default function StationCard({
  name,
  address,
  distance,
  connectorType,
  availableSlots,
  rating,
  onPress,
}: StationCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        borderWidth: 2,
        borderColor: "black",
        marginBottom: 10,
        padding: 10,
      }}
    >
      <Text>Station Name: {name}</Text>
      <Text>Address {address}</Text>
      <Text>Distance: {distance}</Text>
      <Text>ConnectorType: {connectorType}</Text>
      <Text>AvailableSlots: {availableSlots}</Text>
      <Text>Rating: {rating}</Text>
    </Pressable>
  );
}
