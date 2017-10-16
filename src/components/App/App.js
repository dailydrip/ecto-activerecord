import React from "react";

import SocialShare from "grommet/components/SocialShare";
import App from "grommet/components/App";
import Button from "grommet/components/Button";
import Split from "grommet/components/Split";
import Sidebar from "grommet/components/Sidebar";
import Menu from "grommet/components/Menu";
import Markdown from "grommet/components/Markdown";
import Header from "grommet/components/Header";
import Video from "grommet/components/Video";
import Title from "grommet/components/Title";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";
import Box from "grommet/components/Box";
import Footer from "grommet/components/Footer";
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
    <Tile>
      <Row key={key} index={key} rowContent={row} />
    </Tile>
  ));
  return (
    <App centered={false}>
      <Split fixed={false} flex="right">
        <Sidebar full={true} colorIndex="neutral-1" pad="medium">
          <Box direction="row">
            <Anchor href="https://www.dailydrip.com" target="_blank">
              <img src="/favicons/favicon.ico" />
            </Anchor>
            <Heading tag="h2">ActiveRecord vs Ecto</Heading>
          </Box>
          <Box>
            <Paragraph>
              An app to compare ActiveRecord and Ecto queries side-by-side.
            </Paragraph>
          </Box>
          <Footer alignSelf="end">
            <Tiles flush={false} fill={true}>
              <Tile>
                <Button
                  fill={true}
                  label="Contribute"
                  primary={true}
                  href="https://github.com/dailydrip/ecto-activerecord"
                />
              </Tile>
              <Tile>
                <Button
                  fill={true}
                  label="Learn Elixir and Phoenix"
                  href="https://www.dailydrip.com/topics/elixir"
                />
              </Tile>
            </Tiles>
          </Footer>
          {/* <Box direction="row" pad={{ between: "medium" }}> */}
          {/*   <Paragraph margin="none">DailyDrip.com</Paragraph> */}
          {/*   <Menu direction="row" size="small" dropAlign={{ right: "right" }}> */}
          {/*     <Anchor href="https://www.dailydrip.com/topics/elixir"> */}
          {/*       Learn Elixir/Phoenix */}
          {/*     </Anchor> */}
          {/*     <Anchor href="https://github.com/dailydrip/ecto-activerecord"> */}
          {/*       Contribute */}
          {/*     </Anchor> */}
          {/*   </Menu> */}
          {/* </Box> */}
        </Sidebar>
        <Tiles flush={false} colorIndex="light-2" full="vertical">
          {rowsToBeRendered}
        </Tiles>
      </Split>
    </App>
  );
};
