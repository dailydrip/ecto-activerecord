import React from "react";

import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";

export default class Row extends React.Component {
  render() {
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
          Title
        </Heading>
        <Columns masonry={false} maxCount={2} justify="center" size="large">
          <Box align="center" pad="medium" margin="small" colorIndex="light-2">
            Active Record
          </Box>
          <Box align="center" pad="medium" margin="small" colorIndex="light-2">
            Ecto
          </Box>
        </Columns>
      </div>
    );
  }
}
