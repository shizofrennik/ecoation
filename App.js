import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { isSignedIn } from './app/auth';
import AppContainer from './app/containers/AppContainer';
import { createRootNavigator } from './app/navigation/router';
import store from './app/redux/store';

class App extends Component {
  state = {
    signedIn: false,
    checkedSignIn: false,
    showToast: false
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => console.log("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) return null

    const NavigationLayout = createRootNavigator(signedIn);
    return (
        <Provider store={store}>
          <AppContainer>
            <NavigationLayout />
          </AppContainer>
        </Provider>
    );
  }
}

export default App;
