import React from "react";
import PropTypes from "prop-types";

const BUILD_TIME = new Date().getTime(); // eslint-disable-line no-unused-vars

require("prismjs");
require("prismjs/themes/prism.css");

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
    headComponents: PropTypes.node,
    postBodyComponents: PropTypes.node
  };

  /* eslint-disable global-require, import/no-webpack-loader-syntax, react/no-danger */
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css")
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: require("prismjs/themes/prism.css")
            }}
          />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script type="text/javascript" src="prism/prism.js" />
        </body>
      </html>
    );
  }
}
