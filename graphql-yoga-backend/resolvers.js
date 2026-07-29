import { stations } from "./data/stations.js";
import { bookings } from "./data/bookings.js";
import { generateId } from "./utils/generateId.js";

export const resolvers = {

    Query: {

        stations: () => stations,

        station: (_, { id }) =>
            stations.find(s => s.id === id),

        favouriteStations: () =>
            stations.filter(s => s.isFavourite),

        bookings: () => bookings
    },

    Mutation: {

        toggleFavourite: (_, { stationId }) => {

            const station =
                stations.find(s => s.id === stationId);

            station.isFavourite =
                !station.isFavourite;

            return station;
        },

        bookSlot: (_, { input }) => {

            const station =
                stations.find(
                    s => s.id === input.stationId
                );

            if (!station)
                throw new Error("Station not found");

            if (station.availableSlots <= 0)
                throw new Error("No slots available");

            station.availableSlots--;

            const booking = {

                id: generateId(),

                bookingTime:
                    input.bookingTime,

                status: "CONFIRMED",

                station
            };

            bookings.push(booking);

            return booking;
        },

        cancelBooking: (_, { bookingId }) => {

            const index =
                bookings.findIndex(
                    b => b.id === bookingId
                );

            if (index === -1)
                return false;

            const booking =
                bookings[index];

            booking.station.availableSlots++;

            bookings.splice(index, 1);

            return true;
        }
    }
};