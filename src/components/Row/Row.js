import React from "react";

import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";
import Markdown from "grommet/components/Markdown";

export default class Row extends React.Component {
  constructor() {
    super();
    this.state = { title: "", ecto: "", active_record: "" };
  }

  componentDidMount() {
    const { index } = this.props;
    fetch(`queries/${index}/title.md`)
      .then(response => response.text())
      .then(text => this.setState({ title: text }));

    fetch(`queries/${index}/ecto.md`)
      .then(response => response.text())
      .then(text => this.setState({ ecto: text }));

    fetch(`queries/${index}/active_record.md`)
      .then(response => response.text())
      .then(text => this.setState({ active_record: text }));
  }
  render() {
    const { index } = this.props;

    return (
      <div
        style={{
          backgroundColor: "#434343",
          marginTop: "2px",
          marginBottom: "2px"
        }}
      >
        <Heading
          tag="h2"
          margin="small"
          align="center"
          style={{ color: "white" }}
        >
          {this.state.title}
        </Heading>
        <Columns masonry={false} maxCount={2} justify="center" size="large">
          <Box align="center" pad="medium" margin="small" colorIndex="light-2">
            <Markdown content={this.state.active_record} />
          </Box>
          <Box align="center" pad="medium" margin="small" colorIndex="light-2">
            <Markdown content={this.state.ecto} />
          </Box>
        </Columns>
      </div>
    );
  }
}
