import React from "react";
import App from "../components/App";
import Helmet from "react-helmet";

export default ({ data }) => {
  console.log("data", data);
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>DailyDrip - Active  Record vs Ecto queries</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="../../favicons/android-chrome-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../favicons/favicon-16x16.png"
        />
      </Helmet>
      <App files={data.allFile} />
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
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
