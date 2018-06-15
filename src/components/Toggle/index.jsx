import React, { Component, Children, cloneElement } from 'react';
import Switch from '../Switch';

import { Container, Title, Text } from './style';

class Toggle extends Component {
  static Title = ({ children }) => <Title>{children}</Title>;
  static On = ({ on, children }) => (on ? <Text>{children}</Text> : null);
  static Off = ({ on, children }) => (on ? null : <Text>{children}</Text>);
  static Button = ({ on, handleSwitch }) => (
    <Switch on={on} onClick={handleSwitch} />
  );

  state = {
    on: false
  };

  handleSwitch = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    const { on } = this.state;
    const { children } = this.props;

    return (
      <Container>
        {Children.map(children, child =>
          cloneElement(child, {
            on: on,
            handleSwitch: this.handleSwitch
          })
        )}
      </Container>
    );
  }
}

const Compound = () => (
  <Toggle>
    <Toggle.Title>Compound component</Toggle.Title>
    <Toggle.Button />
    <Toggle.On>Toggle is On</Toggle.On>
    <Toggle.Off>Toggle is Off</Toggle.Off>
  </Toggle>
);

export default Compound;
