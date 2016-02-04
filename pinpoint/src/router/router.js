import React, {
  Component,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

import Login from '../containers/login-container.js';
import Signup from '../containers/signup-container.js';
import Settings from '../containers/settings-container.js';
import Stats from '../containers/stats-container.js';
import MapView from '../containers/map-container.js';
import TabBar from '../components/tabBar.js';

const ROUTES = { Login, Signup, Settings, Stats, MapView, TabBar };

export default class Router extends Component {
  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.basicContainer}
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene = { () => Navigator.SceneConfigs.FloatFromRight }
      />
    );
  }
}