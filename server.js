import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    status: Boolean
  }
`;

const resolver = {
    Query:{
        status:()=>{
            return true;
        }
    }
}

const server ={
    typeDefs : typeDefs,
    resolvers: resolver,
    plugins:{
        ApolloServerPluginLandingPageGraphQLPlayground
    }
}

 server.listen().then(({url})=>{
 console.log(`server ready at ${url}`)
 });