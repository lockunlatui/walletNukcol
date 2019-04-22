/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-22 01:31:47 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 15:59:53
 */

import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Block from "../components/Block";

const { width } = Dimensions.get('window');

class SlideTransactions extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Block 
          style={[
            styles.slideTransactionsContainer,
            { backgroundColor: `${this.props.backgroundColorIcon}`, }]}
          >
          <MaterialCommunityIcons
            name={this.props.nameIcon} size={14} color="white" />
        </Block>
    )
  }
}

const styles = StyleSheet.create({
  slideTransactionsContainer: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    borderRadius: 999
  }
});

export default SlideTransactions;