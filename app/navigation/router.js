import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from 'native-base';

import SignUp from "../components/auth/SignUp";
import SignInContainer from "../containers/AuthContainer";
import Profile from "../containers/ProfileContainer";
import GreenHouse from "../containers/GreenHouseContainer";

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const SignedOut = StackNavigator({
  // cap for future registration
  // SignUp: {
  //   screen: SignUp,
  //   navigationOptions: {
  //     title: "Sign Up"
  //   }
  // },
  SignIn: {
    screen: SignInContainer,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedIn = TabNavigator({
  GreenHouse: {
    screen: GreenHouse,
    navigationOptions: {
      tabBarLabel: "Greenhouse",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-person" size={30} color={tintColor} />
      )
    }
  }
});