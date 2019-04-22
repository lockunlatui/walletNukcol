/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-22 13:47:52 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 14:12:55
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Typography extends React.Component {
  render() {
    const { body1, children, color, style, caption, subtitle1, regular } = this.props;
    const typographyStyles = [
      style,
      subtitle1 && styles.subtitle1,
      body1 && styles.body1,
      caption && styles.caption,
      regular && styles.regular,
      color && { color }
    ];

    return <Text style={typographyStyles}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  body1: {
    fontSize: 14
  },
  subtitle1: {
    fontSize: 16
  },
  caption: {
    fontSize: 12
  },
  regular: {
    fontWeight: '400'
  }
})

export default Typography;