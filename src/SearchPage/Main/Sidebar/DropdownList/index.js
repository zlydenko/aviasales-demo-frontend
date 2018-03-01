import React from "react";

import { Title, Img, Text, Counter, Filters } from "./styled";
import expandIcon from "./expandIcon.svg";

export default class extends React.Component {
  state = {
    opened: this.props.opened || false
  };

  open = e => {
    this.setState(prevState => ({
      opened: !prevState.opened
    }));
  };

  render() {
    return (
      <div>
        <Title onClick={this.open} opened={this.state.opened}>
          <Img src={expandIcon} opened={this.state.opened} alt="" />
          <Text>{this.props.title}</Text>
          {this.props.counter && <Counter>{this.props.counter}</Counter>}
        </Title>
        {this.state.opened && <Filters>{this.props.children}</Filters>}
      </div>
    );
  }
}
