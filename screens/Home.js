/*
 * @Author: Do Loc - doxuanloc2016@gmail.com
 * @Date: 2019-04-07 16:04:36
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 15:59:53
 */
import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Block from "../components/Block";
import Header from "../components/Header";

import SlideTransactions from './SlideTransactions';
import ListTransactions from './ListTransactions';


const { width } = Dimensions.get('window');

const lists = [
  {
    id: 1,
    color: '#ffb50f',
    nameIcon: 'food-fork-drink',
    name: 'Restaurant Tsiskvilli 2',
    time: '25 March 2019 / 04:37PM',
    price: 100
  },
  {
    id: 2,
    color: '#24d1b4',
    nameIcon: 'headphones',
    name: 'Spotify',
    time: '25 March 2019 / 04:37PM',
    price: 99
  },
  {
    id: 3,
    color: '#0fbeff',
    nameIcon: 'car',
    name: 'Taxify',
    time: '25 March 2019 / 04:37PM',
    price: 18
  },
  {
    id: 4,
    color: '#4ebf4e',
    nameIcon: 'home',
    name: 'Geogrian Water & Power',
    time: '25 March 2019 / 04:37PM',
    price: 25
  },
  {
    id: 5,
    color: '#ffb50f',
    nameIcon: 'food-fork-drink',
    name: 'Restaurant Tsiskvilli 2',
    time: '25 March 2019 / 04:37PM',
    price: 125
  },
  {
    id: 6,
    color: '#ed4968',
    nameIcon: 'umbrella',
    name: 'Travel Agency',
    time: '25 March 2019 / 04:37PM',
    price: 600
  },
  {
    id: 7,
    color: '#7621ff',
    nameIcon: 'robot-vacuum-variant',
    name: 'Home security',
    time: '25 March 2019 / 04:37PM',
    price: 100
  }
]

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <Header titleName="Transactions" />,
  };
  render() {
    return (
      <Block flex={1} backgroundColor="#00028c">
        <Block flex={1.5} center backgroundColor="#23269c" style={styles.slideTransactionsContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true} contentContainerStyle={styles.scrollViewSlide} horizontal={true}>
            {lists.map((list) => {
              return (
                <TouchableOpacity key={list.id}>
                  <SlideTransactions
                    backgroundColorIcon={list.color}
                    nameIcon={list.nameIcon}
                  />
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </Block>
        <Block flex={8.5}>
          <ScrollView>
            {lists.map((list) => {
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
    );
  }
}

const styles = StyleSheet.create({
  slideTransactionsContainer: {
    borderBottomRightRadius: width * 0.04,
    borderBottomLeftRadius: width * 0.04,
    flexDirection: 'row'
  },
  scrollViewSlide: {
    height: width * 0.2,
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
  }
});


export default HomeScreen;
