require("prismjs");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-elixir");

import React from "react";

import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";
import Markdown from "grommet/components/Markdown";
import Value from "grommet/components/Value";
import PrismCode from "react-prism";

export default ({ rowContent }) => {
  let { active_record, ecto, key, title } = rowContent;
  console.log(key);

  let description = (
    <Box>
      <Box>
        <small
          style={{
            marginRight: "0.8rem",
            flex: 1
          }}
        >
          ActiveRecord
        </small>
        <PrismCode className="language-ruby" component="pre">
          {active_record.childMarkdownRemark.fields.contents}
        </PrismCode>
      </Box>
      <Box>
        <small
          style={{
            marginRight: "0.8rem",
            flex: 1
          }}
        >
          Ecto
        </small>
        <PrismCode className="language-elixir" component="pre">
          {ecto.childMarkdownRemark.fields.contents}
        </PrismCode>
      </Box>
    </Box>
  );

  return (
    <Card
      colorIndex="light-1"
      heading={title.childMarkdownRemark.fields.contents}
      headingStrong={false}
      description={description}
    />
  );
};
