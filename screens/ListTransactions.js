/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-22 01:31:47 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-24 15:31:53
 */

import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Block from "../components/Block";
import Typography from '../components/Typography';

const { width } = Dimensions.get('window');

class ListTransactions extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Block style={styles.listTransactionsContainer} center row>
        <Block
          style={[
            styles.slideTransactionsContainer,
            { backgroundColor: `${this.props.color}`, }]}
        >
          <MaterialCommunityIcons
            name={this.props.nameIcon} size={14} color="white" />
        </Block>
        <Block style={styles.inforTransactions}>
          <Typography regular body color="#fff">{this.props.name}</Typography>
          <Typography regular caption color="#8081c6">{this.props.time}</Typography>
        </Block>
        <Block style={styles.priceTransactions}>
          <Typography regular body color="#fff">{this.props.price} USD</Typography>
        </Block>
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
    borderRadius: 999
  },
  listTransactionsContainer: {
    height: width * 0.2,
    borderBottomWidth: 1,
    borderBottomColor: '#26289d',
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    alignItems: 'flex-start'
  },
  inforTransactions: {
    marginLeft: width * 0.05,
    width: width * 0.45,
  },
  priceTransactions: {
    marginLeft: width * 0.15,
  }
});

export default ListTransactions;