import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default class BottomNav extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <View style={styles.bottom_nav_contain}>
                <TouchableOpacity style={styles.bottom_nav_tab} onPress={this.props.handle_page_turn.bind(this, 1)}><Text>最新消息</Text></TouchableOpacity>
                <TouchableOpacity style={styles.bottom_nav_tab} onPress={this.props.handle_page_turn.bind(this, 2)}><Text>健康資訊</Text></TouchableOpacity>
                <TouchableOpacity style={styles.bottom_nav_tab} onPress={this.props.handle_page_turn.bind(this, 3)}><Text>聯絡我們</Text></TouchableOpacity>
                <TouchableOpacity style={styles.bottom_nav_tab} onPress={this.props.handle_page_turn.bind(this, 4)}><Text>排行榜</Text></TouchableOpacity>
                <TouchableOpacity style={styles.bottom_nav_tab} onPress={this.props.handle_page_turn.bind(this, 5)}><Text>我的紀錄</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottom_nav_contain: {
        flexDirection:"row",
        position:"absolute",
        bottom:0,
    },
    bottom_nav_tab: {
        backgroundColor:"grey",
        margin:5,
        padding:5
    }
})