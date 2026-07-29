import { gql } from "@apollo/client";

export const GET_STATIONS = gql`
  query GetStations {
    stations {
      id
      name
      address
      city
      connectorType
      availableSlots
      rating
      distance
      isFavourite
    }
  }
`;