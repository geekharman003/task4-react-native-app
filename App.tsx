import { Text } from "react-native";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { client } from "./src/apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Text>App</Text>
    </ApolloProvider>
  );
}
