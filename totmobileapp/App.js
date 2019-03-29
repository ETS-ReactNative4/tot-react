import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import NewsScreen from './screens/NewsScreen';
import CameraScreen from './screens/CameraScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import WebScreen from './screens/WebScreen';
import Reg from './screens/RegScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';




const HomeStack = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Product: ProductScreen,
  Detail : DetailScreen,
  Register: Reg,
  Login: LoginScreen,
  Map : MapScreen,
});

HomeStack.navigationOptions={tabBarLabel : 'หน้าหลัก'}

//tab
const NewsStack = createStackNavigator({
  News:NewsScreen,
  Web :WebScreen
});
NewsStack.navigationOptions={tabBarLabel : 'ข่าวสาร'}


const CameraStack = createStackNavigator({
  Camera:CameraScreen
});
CameraStack.navigationOptions={tabBarLabel : 'กล้อง'}



const tabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  News: NewsStack,
  Camera: CameraStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : ''}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
       // IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'News') {
        iconName = `ios-information-circle`;
      }else if (routeName === 'Camera') {
        iconName = `ios-camera`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#0075c4',
    inactiveTintColor: 'gray',
  },
}
);

// เมนูด้านข้าง
const drawer = createDrawerNavigator({
   //HomeStack

   tabNavigator,
   Menu: MenuScreen,   
},{
   drawerPosition: 'left',
   drawerWidth: 300,
   contentComponent: (props) => <MenuScreen {...props} />
});

const AppContainer = createAppContainer(drawer);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
} 