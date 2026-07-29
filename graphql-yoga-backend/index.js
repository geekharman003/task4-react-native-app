import { createServer } from "node:http";

import {
    createYoga,
    createSchema
} from "graphql-yoga";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

const yoga = createYoga({

    schema: createSchema({

        typeDefs,
        resolvers
    })
});

createServer(yoga).listen(4000, () => {

    console.log("Charging GraphQL API");

    console.log(
        "http://localhost:4000/graphql"
    );
});