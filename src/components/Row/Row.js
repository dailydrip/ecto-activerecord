import React from "react";

import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";
import Markdown from "grommet/components/Markdown";
import Value from "grommet/components/Value";

export default ({ rowContent }) => {
  let active_record, ecto, title;

  rowContent.map(elem => {
    if (elem.hasOwnProperty("active_record")) {
      active_record = elem.active_record;
    } else if (elem.hasOwnProperty("ecto")) {
      ecto = elem.ecto;
    } else if (elem.hasOwnProperty("title")) {
      title = elem.title;
    }
  });
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
        {title}
      </Heading>
      <Columns masonry={false} maxCount={2} justify="center" size="large">
        <small
          style={{
            marginRight: "0.8rem",
            flex: 1,
            color: "white",
            alignSelf: "flex-end"
          }}
        >
          ActiveRecord
        </small>
        <Box align="center" pad="medium" margin="small" colorIndex="light-2">
          <Markdown content={active_record} />
        </Box>
        <small
          style={{
            marginRight: "0.8rem",
            flex: 1,
            color: "white",
            alignSelf: "flex-end"
          }}
        >
          Ecto
        </small>
        <Box align="center" pad="medium" margin="small" colorIndex="light-2">
          <Markdown content={ecto} />
        </Box>
      </Columns>
    </div>
  );
};
