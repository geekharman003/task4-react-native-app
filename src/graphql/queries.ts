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

export const GET_STATION = gql`
  query GetStation($id: ID!) {
    station(id: $id) {
      id
      name
      address
      city
      description
      connectorType
      availableSlots
      amenities
      rating
      reviews
      isFavourite
    }
  }
`;

export const TOGGLE_FAVOURITE = gql`
  mutation ToggleFavourite($stationId: ID!) {
    toggleFavourite(stationId: $stationId) {
      id
      isFavourite
    }
  }
`;
