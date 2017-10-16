import React from "react";

import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";
import Markdown from "grommet/components/Markdown";
import Value from "grommet/components/Value";

export default ({ rowContent }) => {
  let { active_record, ecto, key, title } = rowContent;
  console.log(key);

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
        {title.childMarkdownRemark.fields.contents}
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
          <Markdown
            content={active_record.childMarkdownRemark.fields.contents}
          />
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
          <Markdown content={ecto.childMarkdownRemark.fields.contents} />
        </Box>
      </Columns>
    </div>
  );
};
