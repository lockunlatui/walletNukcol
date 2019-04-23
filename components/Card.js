/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-23 12:33:48 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-23 18:38:36
 */

import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native'; 
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import Block from '../components/Block';
import Typography from './Typography';

import VisaIcon from '../assets/images/visa.png';

const { width } = Dimensions.get('window');

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block middle style={[styles.cardsContainer, { backgroundColor: `${this.props.cardColor}` }]}>
      <Block style={[styles.borderInCard, {  borderColor: `${this.props.borderColor}`,}]} />
          <MaterialCommunityIcons style={styles.marginVertical} name="react" size={24} color="yellow" />
          <Typography style={styles.marginDate} letterSpacing={2} bold color="#fff" subtitle1>{this.props.number}</Typography>
          <Typography bold style={styles.marginDate} color="#fff" caption>{this.props.date}</Typography>
          <Block style={styles.marginVertical} row>
            <Typography style={styles.nameCard} bold body1 color={this.props.color}>{this.props.name}</Typography>
            <Image style={styles.visaIcon} source={VisaIcon} />
          </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  cardsContainer: {
    position: 'relative',
    width: width * 0.6,
    height: width * 0.4,
    marginHorizontal: width * 0.02,
    paddingHorizontal: width * 0.04,
    borderRadius:  width * 0.02
  },
  borderInCard:{
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.8,
    borderWidth: width * 0.2,
    borderRadius: 999,
    bottom: width * 0.05,
    left:  width * 0.07,
  },
  visaIcon : {
    width : width * 0.1,
    height: width * 0.05,
  },
  marginVertical: {
    marginVertical: width * 0.02
  },
  marginDate:{
    marginVertical: width * 0.005
  },
  nameCard: {
    width: width * 0.4
  }
})

export default Card;