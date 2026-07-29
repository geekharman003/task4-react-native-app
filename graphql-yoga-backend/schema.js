export const typeDefs = /* GraphQL */ `

type Station {

    id: ID!
    name: String!
    address: String!
    city: String!
    description: String!
    connectorType: String!
    availableSlots: Int!
    rating: Float!
    distance: Float!
    amenities: [String!]!
    reviews: Int!
    isFavourite: Boolean!
}

type Booking {

    id: ID!
    bookingTime: String!
    status: String!

    station: Station!
}

input BookSlotInput {

    stationId: ID!
    bookingTime: String!
}

type Query {

    stations: [Station!]!

    station(id: ID!): Station

    favouriteStations: [Station!]!

    bookings: [Booking!]!
}

type Mutation {

    toggleFavourite(
        stationId: ID!
    ): Station!

    bookSlot(
        input: BookSlotInput!
    ): Booking!

    cancelBooking(
        bookingId: ID!
    ): Boolean!
}
`;