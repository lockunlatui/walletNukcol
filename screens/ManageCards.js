/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-23 11:48:52 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-23 19:07:02
 */

import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Block from '../components/Block';
import Typography from '../components/Typography';
import Header from '../components/Header';
import Card from '../components/Card';
import ListTransactions from './ListTransactions';

import mockCards from '../contants/mockCards';
import mockDataTransactions from '../contants/mockDataTransactions';

const { width } = Dimensions.get('window');

class ManageCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      positionCard: 0
    }
  }

  static navigationOptions = {
    header: <Header titleName="Transactions" />
  }

  handleScroll = (event) => {
    this.setState({
      positionCard: this.state.positionCard = Math.floor(event.nativeEvent.contentOffset.x / ( width * 0.35))
    })
  }

  render() {
    return (
      <Block flex={1} backgroundColor="#00028c">
        <Block style={styles.slideCardContainer} backgroundColor="#3335a3" flex={4.5}>
          <ScrollView   scrollEventThrottle={10} onScroll={this.handleScroll} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewCard} horizontal={true}>
            {mockCards.map((mockCard) => {
              return (
                <Block key={mockCard.id}>
                  <Card
                    borderColor={mockCard.borderColor}
                    cardColor={mockCard.cardColor}
                    color={mockCard.color}
                    number={mockCard.number}
                    date={mockCard.date}
                    name={mockCard.name} />
                </Block>
              )
            })}
          </ScrollView>
          <Block row middle center>
          {mockCards.map((mockCard) => {
              return (
                <Block key={mockCard.id}>
                  <Block
                    style={[styles.indicatorDot,
                      mockCard.id === this.state.positionCard ?  { backgroundColor: '#21aa93' } : { backgroundColor: "#686ab4" },
                    ]}
                    />
                </Block>
              )
            })}
          </Block>
        </Block>
        <Block middle center flex={5.5}>
        <Block style={styles.btnManageContainer} middle center>
        <TouchableOpacity style={styles.buttonManage}>
            <MaterialIcons style={styles.iconCard} name="credit-card" size={24} color="white" />
            <Typography color="#fff" bold subtitle1>Manage Your Cards</Typography>
        </TouchableOpacity>
        </Block>
        <ScrollView>
            {mockDataTransactions.map((list) => {
              return (
                <TouchableOpacity key={list.id}>
                  <ListTransactions 
                    color={list.color}
                    nameIcon={list.nameIcon}
                    name={list.name}
                    time={list.time}
                    price={list.price}
                  />
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  slideCardContainer: {
    borderBottomRightRadius: width * 0.04,
    borderBottomLeftRadius: width * 0.04,
  },
  scrollViewCard: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorDot: {
    width: width * 0.025,
    height: width * 0.025,
    borderRadius: 999,
    marginHorizontal: width * 0.02,
    marginBottom: width * 0.15
  },
  btnManageContainer: {
    bottom: width * 0.1
  },
  buttonManage: {
    width: width * 0.9,
    height: width * 0.18,
    backgroundColor: '#21aa93',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    flexDirection: 'row'
  },
  iconCard: {
    marginHorizontal: width * 0.04
  }
})

export default ManageCards;