/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-23 11:52:29 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-23 11:58:30
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import ManageCardsScreen from  '../screens/ManageCards';

const ManageCardStack = createStackNavigator({
  ManageCards: ManageCardsScreen
});

export default createAppContainer(ManageCardStack);