import React, {Component} from 'react';
import {Container} from 'native-base';
import {onSignOut} from '../../auth';
import {
  Text,
  Button
} from 'react-native';

export default ({navigation}) => {
  return (
    <Container>
      <Text>
        !!!PROFILE!!!
      </Text>
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="LOGOUT"
        onPress={() => {
            onSignOut().then(() => navigation.navigate("SignedOut"))
          }}
      />
    </Container>
  );
}