import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Label, Card, CardItem, Button} from 'native-base';
import {onSignIn} from '../../auth';
import { Text } from 'react-native';

class SignIn extends Component {

  state = {
    username: null,
    password: null
  }

  handleUsername = (value) => {
    this.setState({ username: value });
  }

  handlePassword = (value) => {
    this.setState({ password: value });
  }

  handleLogin = () => {
    let {username, password} = this.state;
    let {navigation} = this.props;
    username = username.toLowerCase();

    let credentials = {username, password};
    this.props.login({credentials, navigation});
  }

  render() {
    let {navigation, token, login} = this.props;
    return (
      <Container>
        <Content padder>
          <Card style={{padding: 20, margin: 20}}>
            <CardItem header>
              <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Please sign in:</Text>
            </CardItem>
            <Form style={{marginBottom: 40}}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={this.handleUsername}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={this.handlePassword}/>
              </Item>
            </Form>
            <Button block success
                    onPress={this.handleLogin}>
              <Text style={{color: "white", fontSize: 16}}>Login</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SignIn;
