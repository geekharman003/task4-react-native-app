import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { client } from "./src/apollo/client";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator></AppNavigator>
    </ApolloProvider>
  );
}
