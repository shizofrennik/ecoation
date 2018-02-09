import React, { Component } from 'react';
import { Root } from 'native-base';
import { isSignedIn } from './app/auth';
import { createRootNavigator } from './app/navigation/router';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  state = {
    signedIn: false,
    checkedSignIn: false
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => console.log("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const NavigationLayout = createRootNavigator(signedIn);

    return (
      <Root>
        <NavigationLayout />
      </Root>
    );
  }
}
