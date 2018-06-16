import React, { Component, createContext } from 'react';
import Switch from '../Switch';

import { Container, Title, Text } from './style';

const ToggleContext = createContext();

class Toggle extends Component {
  state = {
    on: false
  };

  handleSwitch = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    const { on } = this.state;

    return (
      <Container>
        <Title>Render Props</Title>
        <Switch on={on} onClick={this.handleSwitch} />

        <Text>Toggle is {on ? 'ON' : 'OFF'}</Text>
        <button onClick={this.handleSwitch}>{on ? 'ON' : 'OFF'}</button>
      </Container>
    );
  }
}

export default Toggle;
