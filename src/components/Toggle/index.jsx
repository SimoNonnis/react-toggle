import React, { Component } from 'react';
import Switch from '../Switch';

import { Container, Title, Text } from './style';

class Toggle extends Component {
  state = {
    on: false
  };

  handleSwitch = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    return this.props.renderUI({
      on: this.state.on,
      handleSwitch: this.handleSwitch
    });
  }
}

const RenderProps = () => (
  <Toggle
    renderUI={({ on, handleSwitch }) => (
      <Container>
        <Title>Render Props</Title>
        <Switch on={on} onClick={handleSwitch} />

        <Text>Toggle is {on ? 'ON' : 'OFF'}</Text>
        <button onClick={handleSwitch}>{on ? 'ON' : 'OFF'}</button>
      </Container>
    )}
  />
);

export default RenderProps;
