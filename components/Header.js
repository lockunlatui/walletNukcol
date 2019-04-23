/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-22 01:12:36 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-23 18:20:08
 */

import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Block from '../components/Block';
import Typography from '../components/Typography';

const { width } = Dimensions.get('window');

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Block backgroundColor="#23269c">
        <Block 
          backgroundColor='#3335a3' 
          row 
          style={[styles.headerContainer, this.props.isBorder === true ? styles.isBorder : '']}>
        <TouchableOpacity style={styles.buttonBack}>
          <MaterialIcons name="keyboard-backspace" size={24} color="white" />
        </TouchableOpacity>
        <Block middle center style={styles.titleContainer}>
          <Typography subtitle1 color="#fff" bold>{this.props.titleName}</Typography>
        </Block>
      </Block></Block>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: width * 0.15,
  },
  isBorder: {
    borderBottomRightRadius: width * 0.04,
    borderBottomLeftRadius: width * 0.04,
  },
  buttonBack: {
    width: width * 0.15,
    height: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    height: width * 0.15,
  }
});

export default Header;