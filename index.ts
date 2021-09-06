import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resorvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});
server.start(()=> console.log("kanovii hi"));
console.log("hi");