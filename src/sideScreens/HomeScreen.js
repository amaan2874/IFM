import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View,Text } from 'react-native'
import Home from '../bottom/Home';
import Search from '../bottom/Search';
import Favorites from '../bottom/Favorites';
import Message from '../bottom/Message';
import More from '../bottom/More';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Bottom = createBottomTabNavigator();
const HomeScreen= () => {
  return (
    <Bottom.Navigator screenOptions={{
      tabBarActiveTintColor:'#019863',
      tabBarInactiveTintColor:'black',
      headerShown:false
    }}>
      <Bottom.Screen name='Home' component={Home} options={{
        tabBarIcon:({color,size}) =>(
          <FontAwesome5 name="home" size={size} color={color} />
        )
      }} />
      <Bottom.Screen name='Search' component={Search} options={{
        tabBarIcon:({color,size}) =>(
          <FontAwesome5 name="search" size={size} color={color} />
        )
      }} />
      <Bottom.Screen name='Favorites' component={Favorites} options={{
        tabBarIcon:({color,size}) =>(
          <Octicons name="heart" size={size} color={color} />
        )
      }} />
      <Bottom.Screen name='message' component={Message} options={{
        tabBarIcon:({color,size}) =>(
          <MaterialCommunityIcons name="message-text-outline" size={size} color={color} />
        )
      }} />
      <Bottom.Screen name='More' component={More} options={{
        tabBarIcon:({color,size}) =>(
          <Feather name="more-horizontal" size={size} color={color} />
        )
      }} />
    </Bottom.Navigator>
  )
}

export default HomeScreen