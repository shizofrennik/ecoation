import React, {Component} from 'react';
import {Container, Button, Card, CardItem} from 'native-base';
import {Text} from 'react-native';

export default ({navigation, logout}) => {
  return (
    <Container padder style={{justifyContent: "center", alignItems: "center"}}>
      <Card style={{padding: 20, margin: 20, width: '80%'}}>
        <CardItem header>
          <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Profile:</Text>
        </CardItem>
        <Button
          block
          danger
          onPress={() => logout(navigation)}>
          <Text style={{color: "white", fontSize: 16}}>Logout</Text>
        </Button>
      </Card>
    </Container>
  );
}