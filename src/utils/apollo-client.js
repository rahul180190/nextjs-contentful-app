import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const TOKEN = "QxEbLrgtSw-0UljC_0tQArUZiOyOaAzOajAW0ConXug";
//process.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = "kqjzg3qhsxut";
//process.env.CONTENTFUL_SPACE_ID;
console.log("space-",SPACE);
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
  uri: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;