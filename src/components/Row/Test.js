import React from "react";

export default ({ data }) => {
  console.log("data", data);
  return <div>Hello world</div>;
};

export const query = graphql`
query GetMarkdownQuery {
  allFile {
    totalCount
    edges {
      node {
        name
        relativePath
        extension
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
}
`;
