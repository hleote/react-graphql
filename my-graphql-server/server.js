import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";

import { customFetch } from "./utils.js";

const baseURL = "http://localhost:11000";

const schema = gql`
  type Query {
    person: Person
    facility: Facility
    exposure: Exposure
  }

  type Mutation {
    postFacility(inputValue: Int!): Facility
    postExposure(inputValue: Int!): Exposure
  }

  type Person {
    val1: Int
    val2: Int
  }
  type Facility {
    val3: Int
    val4: Int
  }
  type Exposure {
    val5: Int
  }
`;

const resolvers = {
  Query: {
    person: () => {
      return fetch(`${baseURL}/person`, {
        "Access-Control-Allow-Origin": "*",
      }).then((res) => res.json());
    },
    facility: () => {
      return fetch(`${baseURL}/facility`, {
        "Access-Control-Allow-Origin": "*",
      }).then((res) => res.json());
    },
    exposure: () => {
      return fetch(`${baseURL}/exposure`, {
        "Access-Control-Allow-Origin": "*",
      }).then((res) => res.json());
    },
  },
  Mutation: {
    postFacility: (parent, args) => {
      return customFetch(`${baseURL}/facility/${args.inputValue}`).then(
        (res) => res
      );
    },
    postExposure: (parent, args) => {
      return customFetch(`${baseURL}/exposure/${args.inputValue}`).then(
        (res) => res
      );
    },
  },
};

const frontendOrigin = "http://localhost:3000";
const corsOptions = {
  origin: frontendOrigin,
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));

const server = new ApolloServer({
  typeDefs: schema,
		resolvers,
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 12000 }, () => {
  console.log("Apollo Server on http://localhost:12000/graphql");
});
