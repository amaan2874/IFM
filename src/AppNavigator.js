import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View,Text } from 'react-native'
import Splash from './screens/Splash';
import MainScreen from './screens/MainScreen';
import IFM from './screens/IFM';
import Login from './screens/Login';
import User from './screens/User';
import Administrator from './screens/Administrator';
import Forget from './screens/Forget';
import SeeDetails from './screens/SeeDetails';
import Home from './bottom/Home';
import SeeMore from './screens/SeeMore';
import Collection from './screens/Collection';
import Expense from './screens/Expense';
import Gave from './screens/Gave';
import Got from './screens/Got';
import Bills from './screens/Bills';

const Stack=createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='IFM' component={IFM} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='MainScreen' component={MainScreen} />
            <Stack.Screen name='User' component={User} />
            <Stack.Screen name='Administrator' component={Administrator} />
            <Stack.Screen name='Forget' component={Forget} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SeeDetails' component={SeeDetails} />
            <Stack.Screen name='SeeMore' component={SeeMore} />
            <Stack.Screen name='Collection' component={Collection} />
            <Stack.Screen name='Expense' component={Expense} />
            <Stack.Screen name='Gave' component={Gave} />
            <Stack.Screen name='Got' component={Got} />
            <Stack.Screen name='Bills' component={Bills} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
