/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-07 16:31:49 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-07 16:32:49
 */
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/Home";


const HomeStack = createStackNavigator({
  Home: HomeScreen
});

export default createAppContainer(HomeStack);

