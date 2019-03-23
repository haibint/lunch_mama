import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Icon, ScrollView } from 'react-native';
import { Constants } from 'expo';

import LoginPage from './LoginPage.js';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      user_type: null,
      current_content_page:null,
    }
  }


  handle_touch = (type) => {
    this.setState({user_type:type});
    // alert(type);
  }

  handle_page_turn = (page) => {
    console.log(page);
    // console.log(this.state.user_type);
    this.setState({current_content_page:JSON.stringify(page)});
  }


  render() {
    if (this.state.user_type === null) {
       return ( 
          <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.handle_touch.bind(this, "Student")}>
            <Text style={styles.button_text}>Student Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handle_touch.bind(this, "Teacher")}>
            <Text style={styles.button_text}>教師登入</Text>
          </TouchableOpacity>
            <Image source={require("../assets/snack-icon.png")}/>
          </View>)
    }
    else if (this.state.current_content_page === null) {
      return (<LoginPage title={this.state.user_type} handle_page_turn={this.handle_page_turn}></LoginPage>)
    }
    else {
      switch(this.state.current_content_page) {
        case "info":
        <View style={styles.container}>
            <Text>{this.state.current_content_page}</Text>
            <Text>{this.state.user_type}</Text>
            {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
            <TouchableOpacity style={styles.bottom_nav} onPress={this.handle_page_turn.bind(this, "info1")}><Text>信息</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bottom_nav}><Text></Text></TouchableOpacity>
        </View>
        case "info2":
          // code block
          break;
        default:
          return(
            <View style={styles.container}>
                <Text>{this.state.current_content_page}</Text>
                <Text>{this.state.user_type}</Text>
                {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
                <TouchableOpacity style={styles.bottom_nav} onPress={this.handle_page_turn.bind(this, "info1")}><Text>最新消息</Text></TouchableOpacity>
                <TouchableOpacity style={styles.bottom_nav}><Text></Text></TouchableOpacity>
            </View>
          )
      }
    }
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 30,
    marginBottom:20
  },
  button_text: {
    fontSize:20
  },
  bottom_nav: {
    position:"absolute",
    bottom:0,
    backgroundColor:"grey",
    margin:5,
    padding:5
  }
});

