import React, {Component} from 'react';
import {Container} from 'native-base';
import {onSignIn} from '../../auth';
import {
  Text,
  Button
} from 'react-native';

export default ({navigation}) => {
  return (
    <Container>
      <Text>
        !!!SIGN IN!!!
      </Text>
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="LOGIN"
        onPress={() => onSignIn().then(() => navigation.navigate("SignedIn")) } // NEW LOGIC
      />
    </Container>
  );
}
