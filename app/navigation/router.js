import { StackNavigator, TabNavigator } from "react-navigation";

import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import Home from "../components/home/Home";
import Profile from "../components/home/Profile";

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
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name="home" size={30} color={tintColor} />
      // )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name="user" size={30} color={tintColor} />
      // )
    }
  }
});