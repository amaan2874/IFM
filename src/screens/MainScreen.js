import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View,Text } from 'react-native'
import{TapRouter} from '@react-navigation/native'
import Sidebar from './Sidebar';
import HomeScreen from '../sideScreens/HomeScreen';

const Drawer =createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar{...props}/>}>
      <Drawer.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:TapRouter}} />
    </Drawer.Navigator>
  )
}

export default MainScreen
