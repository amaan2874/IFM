import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View,Text } from 'react-native'
import{TapRouter} from '@react-navigation/native'
import Sidebar from './Sidebar';
import HomeScreen from '../sideScreens/HomeScreen';

const Drawer =createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar{...props}/>}screenOptions={{
      headerStyle:{
        backgroundColor:'#019863',
      },
      headerTintColor:'#fff',
    }}>
      <Drawer.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
    </Drawer.Navigator>
  )
}

export default MainScreen
