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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { total: 0 };
  }
  componentDidMount() {
    fetch(`total.txt`)
      .then(response => response.text())
      .then(total => this.setState({ total: total }));
  }
  render() {
    let rows = [];
    for (let i = 0; i < this.state.total; i++) {
      rows.push(<Row key={i} index={i} />);
    }
    return (
      <Article pad="none">
        <Box direction="row">
          <Box drection="row" pad="medium">
            <Header>
              <Title>Active Record vs Ecto</Title>
            </Header>
          </Box>
          <Box full="horizontal" direction="row" pad="medium" justify="end">
            <Menu closeOnClick={true} label="Label">
              <Anchor href="#" className="active">
                First action
              </Anchor>
              <Anchor href="#">
                Second action
              </Anchor>
              <Anchor href="#">
                Third action
              </Anchor>
            </Menu>
          </Box>
        </Box>
        {rows}
        <Footer justify="between">
          <Title>
            <s />
          </Title>
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
  }
}
