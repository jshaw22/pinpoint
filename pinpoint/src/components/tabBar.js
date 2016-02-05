// Template from: https://facebook.github.io/react-native/docs/tabbarios.html
import React, { Component, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Settings from '../containers/settings-container';
import Stats from '../containers/stats-container';
import MapView from '../containers/map-container';

const ROUTES = { Settings, Stats, MapView };

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'mapTab',
      notifCount: 0,
      presses: 0,
    };
  }

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  renderScene(routeName) {
    var Component = ROUTES[routeName];
    return <Component navigator={this.props.navigator}/>
  }

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="#000064">
        <Icon.TabBarItem
          title="Statistics"
          iconName="stats-bars"
          selectedIconName="stats-bars"
          selected={this.state.selectedTab === 'statsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'statsTab',
            });
          }}>
          {this.renderScene('Stats')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Map"
          iconName="ios-navigate-outline"
          selectedIconName="ios-navigate"
          //badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this.renderScene('MapView')}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Settings"
          iconName="ios-gear-outline"
          selectedIconName="ios-gear"
          selected={this.state.selectedTab === 'settingsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'settingsTab',
              presses: this.state.presses + 1
            });
          }}>
          {this.renderScene('Settings')}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }

}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});