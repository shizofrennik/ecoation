import React, {Component} from 'react';
import {Container, Button} from 'native-base';
import {Text} from 'react-native';

class GreenHouse extends Component {
  render() {
    return (
      <Container padder style={{justifyContent: "center", alignItems: "center"}}>
        <Button
          style={{alignSelf: "center", paddingHorizontal: 20}}
          success
          onPress={() => this.props.getGreenHouseData()}>
          <Text style={{color: "white", fontSize: 16}}>Receive Data</Text>
        </Button>
      </Container>
    );
  }
}

export default GreenHouse;