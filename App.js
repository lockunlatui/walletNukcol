/*
 * @Author: Do Loc - doxuanloc2016@gmail.com
 * @Date: 2019-04-07 15:56:45
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 16:13:54
 */

import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity, StatusBar, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import TabNavigator from "./navigation/AppNavigator";

import Block from './components/Block';

const { width } = Dimensions.get('window');

export default class App extends React.Component {


  onAlert = () => {
    Alert.alert(
      'Nukcol say',
      'Contact for me: https://fb.me/nukcol',
      [
        {text: 'OK', onPress: () => console.log('OK')},
      ],
    );
  } 

  render() {
    return (
      <Block flex={1}>
        <StatusBar hidden />
        <TabNavigator />
        <Block style={styles.borderRight}></Block>
        <Block style={styles.borderLeft}></Block>
        <Block style={styles.boxbuttonFlat}>
        <TouchableOpacity onPress={this.onAlert} style={styles.buttonFlat}>
              <AntDesign name="user" size={24} color="white" />
            </TouchableOpacity>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  buttonFlat: {
    position: 'absolute',
    bottom: width * 0.0225,
    alignSelf: 'center',
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: '#21aa93',
    borderRadius: 999,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxbuttonFlat: {
    position: 'absolute',
    bottom: width * 0.0335,
    right: width * 0.105,
    width: width * 0.242,
    height: width * 0.242,
    borderTopLeftRadius: width * 0.125,
    borderTopRightRadius: width * 0.125,
    borderBottomLeftRadius: width * 0.125,
    borderBottomRightRadius: width * 0.125,
    borderWidth: 0,
    backgroundColor: '#00028c',
    borderRadius: 999,
  },
  borderLeft: {
    position: 'absolute',
    width: width * 0.653,
    bottom: width * 0.148,
    left: 0,
    height: 10,
    borderTopRightRadius: 999,
    backgroundColor: '#fff',
    borderWidth: 0
  },
  borderRight: {
    position: 'absolute',
    width: width * 0.105,
    bottom: width * 0.148,
    right: 0,
    height: 10,
    borderTopLeftRadius: 999,
    backgroundColor: '#fff',
    borderWidth: 0
  }
});
