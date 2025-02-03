import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getAllPosts() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllPosts {
        blogPostCollection {
          items {
            title
            author
            slug
            date
            body {
              json
            }
            image {
              url
            }
          }
        }
      }
    `,
  });
  console.log(data.blogPostCollection.items);
  return data.blogPostCollection.items;
}

export async function getPostBySlug(slug) {
  console.log("function call function");
  const { data } = await apolloClient.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        blogPostCollection(where: { slug: $slug }) {
          items {
            title
            author
            date
            sys {
              publishedAt
            }
            body {
              json
            }
            image {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  console.log(data.blogPostCollection.items[0]);
  return data.blogPostCollection.items[0];
}

export default { getAllPosts, getPostBySlug };
