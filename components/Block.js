/*
 * @Author: Do Loc - doxuanloc2016@gmail.com
 * @Date: 2019-04-07 16:07:42
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-22 13:42:29
 */

import React from "react";
import { View, StyleSheet } from "react-native";

class Block extends React.Component {
  render() {
    const { flex, center, middle, children, style, backgroundColor, row, column } = this.props;
    const blockStyles = [
      style,
      flex && { flex },
      center && styles.center,
      middle && styles.middle,
      row && styles.row,
      column && styles.column,
      backgroundColor && { backgroundColor }
    ];

    return <View style={blockStyles}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  }
});

export default Block;
