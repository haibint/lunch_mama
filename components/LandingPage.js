import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Icon, ScrollView } from 'react-native';
import { Constants } from 'expo';

import LoginPage from './LoginPage.js';
import BottomNav from "./BottomNav.js";
import ClassRoom from './ClassRoom.js';

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
    // console.log(page);
    // console.log(this.state.user_type);
    this.setState({current_content_page:page});
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
      const page_id = this.state.current_content_page;
      switch (page_id) {
        case 1:
        return(
          <View style={styles.container}>
              <Text>Home Page</Text>
              <Text>{this.state.user_type}</Text>
              {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
              <BottomNav handle_page_turn={this.handle_page_turn}></BottomNav>
          </View>
        )
          
        case 2:
          return(
            <View style={styles.container}>
                <Text>Info Page</Text>
                <Text>{this.state.user_type}</Text>
                {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
                <BottomNav handle_page_turn={this.handle_page_turn}></BottomNav>
            </View>
          )
        case 3:
          return(
            <View style={styles.container}>
                <Text>Contact Us</Text>
                <Text>{this.state.user_type}</Text>
                {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
                <BottomNav handle_page_turn={this.handle_page_turn}></BottomNav>
            </View>
          )
        case 4:
          return(
            <View style={styles.container}>
                <Text>Ranking</Text>
                <Text>{this.state.user_type}</Text>
                {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
                <BottomNav handle_page_turn={this.handle_page_turn}></BottomNav>
            </View>
          )
        case 5:
          return(
            <View style={styles.container}>
                <Text>My record</Text>
                <Text>{this.state.user_type}</Text>
                {/* <BottomNav go_to={this.handle_page_turn}></BottomNav> */}
                <ClassRoom user_type={this.state.user_type}></ClassRoom>
                <BottomNav handle_page_turn={this.handle_page_turn}></BottomNav>
            </View>
          )
        default:
          // console.log("default switch trigged");
          // console.log(this.state.current_content_page);
          // console.log(page)
          return(
            <View style={styles.container}>
                <Text>Error Handling Page</Text>
                <Text>{this.state.user_type}</Text>
                <BottomNav handle_page_turn={this.handle_page_turn}></BottomNav>
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
});

