import React, { Component } from 'react';
import Switch from '../Switch';

import { Container, Title } from './style';

class Toggle extends Component {
  render() {
    return (
      <Container>
        <Title>Toggle</Title>
        <Switch />
      </Container>
    );
  }
}

export default Toggle;
