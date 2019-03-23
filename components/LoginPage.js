import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // alert("From child page" + this.props.title);
    this.state = {
      username:null,
      password:null
    }

    
  }

  // verify_user() {
  //   alert("verifying User.");
  //   this.props.handle_page_turn;
  // }
  forget_password() {
    console.log("the user forgot the password.");
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.main_title}>{this.props.title + " Login"}</Text>
        <TextInput style={styles.text_input} placeholder="Username" textContentType="username"/>
        <TextInput style={styles.text_input} placeholder="Password" textContentType="password" secureTextEntry={true}/>
        <TouchableOpacity style={styles.button} onPress={this.props.handle_page_turn.bind(this, "Home")}><Text>Log In</Text></TouchableOpacity>
        <Button title="Forgot Password" onPress={this.forget_password}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  main_title: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text_input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 30,
    marginBottom:20
  },
  // button_text: {
  //   fontSize:20
  // }
});