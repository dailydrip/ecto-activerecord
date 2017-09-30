import React from "react";
import PropTypes from "prop-types";

// Grommet
import App from "grommet/components/App";

// Styles
import "../scss/main.scss";

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <App>
        {this.props.children()}
      </App>
    );
  }
}
