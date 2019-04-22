/*
 * @Author: Do Loc - doxuanloc2016@gmail.com
 * @Date: 2019-04-07 15:56:09
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 13:09:26
 */
import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Foundation, MaterialCommunityIcons
} from 'react-native-vector-icons';

import HomeStack from "./HomeStack";

const { height, width } = Dimensions.get('window');

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: HomeStack,
},{
    defaultNavigationOptions:({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `thumbnails${focused ? '' : ''}`;
          return  <Foundation name={iconName} size={24} color={tintColor} />;
        } else if (routeName === 'Settings') {
          iconName = `credit-card`;
          return  <MaterialCommunityIcons
          name={iconName} size={24} color={tintColor} />;
        }
      }
    }),
  tabBarOptions: {
    showLabel : false,
    activeTintColor: '#00028c',
    inactiveTintColor: '#070d59',
  style: {
    height: width * 0.15,
    marginRight: width * 0.4,
  }
}
});

export default createAppContainer(TabNavigator);
