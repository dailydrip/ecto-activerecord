import React from "react";

import SocialShare from "grommet/components/SocialShare";
import Menu from "grommet/components/Menu";
import Markdown from "grommet/components/Markdown";
import Header from "grommet/components/Header";
import Video from "grommet/components/Video";
import Title from "grommet/components/Title";
import Sidebar from "grommet/components/Sidebar";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Footer from "grommet/components/Footer";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Logo from "grommet/components/icons/Grommet";
import DailyDripApi from "../../api/DailyDripApi";
import Row from "../Row";
import HeaderMenu from "./HeaderMenu";
import { mapValues } from "lodash";

export default ({ files }) => {
  const totalQueries = files.totalCount;
  let rows = [];
  let key, content;

  let rowData = files.edges.reduce((acc, edge) => {
    // generate row data
    let key = edge.node.relativePath.split("/")[0];
    let name = edge.node.name;
    acc[key] = acc[key] || {};
    acc[key][name] = edge.node;
    acc[key]["key"] = key;
    return acc;
  }, {});

  const rowsToBeRendered = Object.values(rowData).map(row => (
    <Row key={key} index={key} rowContent={row} />
  ));
  return (
    <Article pad="none">
      <Box direction="row">
        <Box direction="row" pad="medium">
          <Header>
            <Anchor href="https://www.dailydrip.com" target="_blank">
              <img src="/favicons/favicon.ico" />
            </Anchor>
            <Title>ActiveRecord vs Ecto</Title>
          </Header>
        </Box>
        <Box full="horizontal" direction="row" pad="medium" justify="end">
          <HeaderMenu />
        </Box>
      </Box>
      <div>{rowsToBeRendered}</div>
      <Footer justify="between">
        <Title />
        <Box direction="row" pad={{ between: "medium" }}>
          <Paragraph margin="none">DailyDrip.com</Paragraph>
          <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
            <Anchor href="https://www.dailydrip.com/topics/elixir">
              Learn Elixir/Phoenix
            </Anchor>
            <Anchor href="https://github.com/dailydrip/ecto-activerecord">
              Contribute
            </Anchor>
          </Menu>
        </Box>
      </Footer>
    </Article>
  );
};
