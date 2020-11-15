/*
 * @Author: Do Loc - doxuanloc2016@gmail.com
 * @Date: 2019-04-07 15:56:09
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-24 16:30:42
 */
import React from 'react';
import { Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from "react-native-vector-icons";

import HomeScreen from "../screens/Home";
import ManageCardsScreen from  '../screens/ManageCards';

const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = `thumbnails${focused ? "" : ""}`;
            } else if (route.name === "ManageCards") {
              iconName = `credit-card`;
            }
            return <Foundation name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#00028c",
          inactiveTintColor: "#070d59",
          style: {
            height: width * 0.15,
            marginRight: width * 0.4,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ManageCards" component={ManageCardsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
