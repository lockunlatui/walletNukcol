/*
 * @Author: Do Loc - doxuanloc2016@gmail.com
 * @Date: 2019-04-07 16:04:36
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-23 19:03:07
 */
import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Block from "../components/Block";
import Header from "../components/Header";

import SlideTransactions from './SlideTransactions';
import ListTransactions from './ListTransactions';

import mockDataTransactions from '../contants/mockDataTransactions';

const { width } = Dimensions.get('window');

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <Header isBorder={true} titleName="Transactions" />,
  };
  render() {
    return (
      <Block flex={1} backgroundColor="#00028c">
        <Block flex={1.5} center backgroundColor="#23269c" style={styles.slideTransactionsContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true} contentContainerStyle={styles.scrollViewSlide} horizontal={true}>
            {mockDataTransactions.map((list) => {
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
