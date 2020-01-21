import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Screen0 from '../screens/Screen0';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
 
class MainDrawerNavigator extends Component {
  toggleDrawer = () => { 
    this.props.navigationProps.toggleDrawer(); 
  };
  
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name='ios-menu' style={styles.drawerButton} onPress={this.toggleDrawer.bind(this)}/>
      </View>
    );
  }
}
 
const StackNavigator0 = createStackNavigator({
  Screen0: {
    screen: Screen0,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 0',
      headerLeft: <MainDrawerNavigator navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',

    }),
  }
});
 
const StackNavigator1 = createStackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1',
      headerLeft: <MainDrawerNavigator navigationProps={navigation} />,
      headerStyle: {
      backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    }),
  }
});
 
const StackNavigator2 = createStackNavigator({
  Screen2: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 2',
      headerLeft: <MainDrawerNavigator navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
    }),
  }
});

const DrawerNavigator = createDrawerNavigator({
    Screen0: {
     screen: StackNavigator0,
      navigationOptions: {
        drawerLabel: 'Screen 0',
      },
    },
    Screen1: {
      screen: StackNavigator1,
      navigationOptions: {
        drawerLabel: 'Screen 1',
      },
    },
    Screen2: {
      screen: StackNavigator2,
      navigationOptions: {
        drawerLabel: 'Screen 2',
      },
    },
  },
  {
    unmountInactiveRoutes: true
  }
);

const styles = StyleSheet.create({
  drawerButton: { 
    width: 45,  
    paddingTop: 3,
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 25,
  }
});
 
export default DrawerNavigator;
