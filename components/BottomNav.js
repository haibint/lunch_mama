import * as React from 'react';
import { View, ScrollView, Text } from 'react-native';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';

export default class BottomNav extends React.Component {
  constructor(props) {
    super(props);
  }
  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  render() {
    return (
      <View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    )
  }

  renderTab = ({ tab, isActive }) => {
    if(tab.key === "games" && isActive === true) {
      console.log("this is the game tab selected.");
      this.props.go_to.bind("game tab");
    }

    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={this.renderIcon}
      />
    )
  }

  renderIcon = ({ isActive }) => {
    return <View />
  }
}