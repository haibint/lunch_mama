import * as React from 'react';
import { Text, DatePickerIOS, View, ListView, StyleSheet, TouchableOpacity } from 'react-native';

import Record from "./Record.js"

export default class Classroom extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            student_list: ds.cloneWithRows(['row 1', 'row 2']),
            chosenDate: new Date(),
            // according to one paritcular user's record. 
            lunch_consumption: ds.cloneWithRows([{"today": 0.25}, {"tmr": 1}])
        }
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
      }

    render() {
        if (this.props.user_type === "Teacher") {
            return(
                <View>
                    <Text>Displaying Classroom lunch informaiton for Teacher</Text>
                    <DatePickerIOS 
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                        mode="date"
                    />
                    <ListView
                        contentContainerStyle={styles.list} 
                        dataSource={this.state.student_list}
                        renderRow={(rowData) => <TouchableOpacity><Text style={styles.item}>{rowData}</Text></TouchableOpacity>}
                    />  
                    
                </View>
            )
        }
        else if (this.props.user_type === "Student") {
            return(
                <View>
                    <Text>我的吃飯紀錄</Text>
                    <DatePickerIOS 
                            date={this.state.chosenDate}
                            onDateChange={this.setDate}
                            mode="date"
                        />
                    <ListView
                        contentContainerStyle={styles.list} 
                        dataSource={this.state.lunch_consumption}
                        renderRow={(rowsData) => <Record {...rowsData} />}
                    />  
                    
                </View>
            )
        } 
        else {
            return(
                <Text>Something is wrong here :(</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100
    }
})