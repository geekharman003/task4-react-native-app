import { View, Text, TextInput } from "react-native";
import React from "react";
import { TextFieldProps } from "../types/textField";

export default function TextField({ content, value, setValue }:TextFieldProps) {
  return (
    <View style={{ flexDirection: "row",alignItems:"center",gap:5,marginBottom:10 }}>
      <Text>{content}</Text>
      <TextInput style={{borderColor:"black",borderWidth:1,outline:"none",width:100,padding:5}} value={value} onChangeText={(text) => setValue(text)} />
    </View>
  );
}
