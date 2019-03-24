import React from 'react';
import { View, Text} from 'react-native';


const Record = (props) => (
  <View>
    <Text>
      {JSON.stringify(props)} 
    </Text>
    <Text>
      {props["today"]} 
    </Text>
    <Text>
      {props["tmr"]}
    </Text>
  </View>
);

export default Record;
