import React, { Component, createContext } from 'react';
import Switch from '../Switch';

import { Container, Title, Text } from './style';

const ToggleContext = createContext();

class Toggle extends Component {
  static Title = ({ children }) => <Title>{children}</Title>;
  static On = ({ children }) => (
    <ToggleContext.Consumer>
      {({ on }) => (on ? <Text>{children}</Text> : null)}
    </ToggleContext.Consumer>
  );
  static Off = ({ children }) => (
    <ToggleContext.Consumer>
      {({ on }) => (on ? null : <Text>{children}</Text>)}
    </ToggleContext.Consumer>
  );
  static Button = () => (
    <ToggleContext.Consumer>
      {({ on, handleSwitch }) => <Switch on={on} onClick={handleSwitch} />}
    </ToggleContext.Consumer>
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
        <ToggleContext.Provider
          value={{
            on: on,
            handleSwitch: this.handleSwitch
          }}
        >
          {children}
        </ToggleContext.Provider>
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
