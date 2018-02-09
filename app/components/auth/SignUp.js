import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Header } from 'native-base';
import {
  Button
} from 'react-native';
//
// export default class SignUp extends Component {
//   render() {
//     return (
//       <Container>
//         <Text>
//           SIGN UP!
//         </Text>
//       </Container>
//     );
//   }
// }

export default ({ navigation }) => (
  <Container style={{ paddingVertical: 20 }}>
    <Content>
      <Card>
        <CardItem>
          <Body>
          <Text>
            Please sign up!
          </Text>
          </Body>
        </CardItem>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </Card>
    </Content>
  </Container>
);
