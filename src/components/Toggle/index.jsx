import React, { Component } from 'react';
import Switch from '../Switch';

import { Container, Title, Text } from './style';

const renderUI = ({ on, handleSwitch }) => (
  <Container>
    <Title>Render Props</Title>
    <Switch on={on} onClick={handleSwitch} />

    <Text>Toggle is {on ? 'ON' : 'OFF'}</Text>
    <button onClick={handleSwitch}>{on ? 'ON' : 'OFF'}</button>
  </Container>
);

class Toggle extends Component {
  state = {
    on: false
  };

  handleSwitch = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    const { on } = this.state;
    return renderUI({ on: on, handleSwitch: this.handleSwitch });
  }
}

const RenderProps = () => <Toggle />;

export default RenderProps;
