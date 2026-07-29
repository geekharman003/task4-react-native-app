import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import { FavouriteButtonProps } from "../types/favourite";

export default function FavouriteButton({
  isFavourite,
  setIsFavourite,
  onPress,
}: FavouriteButtonProps) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Icon
          name={isFavourite ? "heart" : "heart-o"}
          size={35}
          color={isFavourite ? "#ff3b30" : "#8e8e93"}
        />
      </TouchableOpacity>
      <Text style={styles.text}>
        {isFavourite ? "Saved to Favorites" : "Tap to Favorite"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
