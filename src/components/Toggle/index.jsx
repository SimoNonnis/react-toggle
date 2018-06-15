import React, { Component } from 'react';
import Switch from '../Switch';

import { Container, Title } from './style';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  handleSwitch = () => this.setState({ on: !this.state.on });

  render() {
    return (
      <Container>
        <Title>Toggle</Title>
        <Switch on={this.state.on} onClick={this.handleSwitch} />
      </Container>
    );
  }
}

export default Toggle;
