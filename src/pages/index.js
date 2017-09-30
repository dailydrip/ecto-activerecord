import React from "react";
import App from "../components/App";
import Helmet from "react-helmet";

export default class Index extends React.Component {
  render() {
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
        <App />
      </div>
    );
  }
}
