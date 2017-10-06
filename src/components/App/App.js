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

export default ({ files }) => {
  const totalQueries = files.totalCount;
  let rowsToBeRendered = [];
  let rows = [];
  let key, content;

  for (let i = 0; i < totalQueries; i += 3) {
    rows[i] = [];

    key = files.edges[i].node.name;
    content = files.edges[i].node.childMarkdownRemark.excerpt;

    rows[i].push({ [key]: content });

    key = files.edges[i + 1].node.name;
    content = files.edges[i + 1].node.childMarkdownRemark.excerpt;

    rows[i].push({ [key]: content });

    key = files.edges[i + 2].node.name;
    content = files.edges[i + 2].node.childMarkdownRemark.excerpt;

    rows[i].push({ [key]: content });

    rowsToBeRendered.push(<Row key={i} index={i} rowContent={rows[i]} />);
  }
  return (
    <Article pad="none">
      <Box direction="row">
        <Box direction="row" pad="medium">
          <Header>
            <img src='/favicons/favicon.ico' />
            <Title>Active Record vs Ecto</Title>
          </Header>
        </Box>
        <Box full="horizontal" direction="row" pad="medium" justify="end">
          <HeaderMenu />
        </Box>
      </Box>
      {rowsToBeRendered}
      <Footer justify="between">
        <Title />
        <Box direction="row" pad={{ between: "medium" }}>
          <Paragraph margin="none">
            DailyDrip.com
          </Paragraph>
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
