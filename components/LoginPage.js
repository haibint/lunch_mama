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

  verify_user(username, password) {
    console.log(this.props);
    console.log(username);
    console.log(password);
    var that = this;
    fetch("http://128.199.210.235/auth?username="+username+"&password="+password)
    .then(response => response.json())
    .then(function(json){
      console.log(that.props);  // can not access props
      console.log(json.verified);
      that.props.handle_page_turn(1);
      
      }
    )
    .catch(err => console.log(err))
  }

  sign_up_user(username, password) {
    // console.log(this.props);
    // console.log(username);
    // console.log(password);
    var that = this;
    fetch("http://128.199.210.235/sign_up?username=haibin&password=123456")
    .then(response => response.json())
    .then(function(json){
      console.log(that.props);  // can not access props
      console.log(json.verified);
      that.props.handle_page_turn(1);
      }
    )
    .catch(err => console.log(err))
  }

  forget_password() {
    alert("User forgot password.")
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.main_title}>{this.props.title + " Login"}</Text>
        <TextInput style={styles.text_input} placeholder="Username" textContentType="username"/>
        <TextInput style={styles.text_input} placeholder="Password" textContentType="password" secureTextEntry={true}/>
        <TouchableOpacity style={styles.button} onPress={this.verify_user.bind(this, 'haibin', '123456')}><Text>Log In</Text></TouchableOpacity>
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