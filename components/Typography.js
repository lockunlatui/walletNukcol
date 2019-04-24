/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-22 13:47:52 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-24 15:31:43
 */

import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class Typography extends React.Component {
  render() {
    const { body, children, color, style, caption, subtitle, regular, bold, letterSpacing } = this.props;
    const typographyStyles = [
      style,
      subtitle && styles.subtitle,
      body && styles.body,
      letterSpacing && { letterSpacing },
      caption && styles.caption,
      regular && styles.regular,
      bold && styles.bold,
      color && { color }
    ];

    return <Text style={typographyStyles}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: 14
  },
  subtitle: {
    fontSize: 16
  },
  caption: {
    fontSize: 12
  },
  regular: {
    fontWeight: '400'
  },
  bold: {
    fontWeight: '900'
  }
})

export default Typography;