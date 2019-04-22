/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-22 01:12:36 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 13:09:50
 */

import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.header}><View style={styles.headerContainer}>
        <TouchableOpacity style={styles.buttonBack}>
          <MaterialIcons name="keyboard-backspace" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.titleName}</Text>
        </View>
      </View></View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3335a3',
    borderBottomRightRadius: width * 0.04,
    borderBottomLeftRadius: width * 0.04,
    height: width * 0.15,
    flexDirection: 'row'
  },
  header: {
    backgroundColor: '#23269c'
  },
  buttonBack: {
    width: width * 0.15,
    height: width * 0.15, justifyContent: 'center', alignItems: 'center'
  },
  titleContainer: {
    height: width * 0.15, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontWeight: 'bold', color: 'white'
  }
});

export default Header;