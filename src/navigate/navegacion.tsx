/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 'use strict'
 import React from 'react';

 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Usuario, Time } from '../vistas';
import { Icon } from 'native-base';
 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

MaterialIcons.loadFont();
FontAwesome.loadFont();
AntDesign.loadFont();
Ionicons.loadFont();

 const Tabs = createBottomTabNavigator();
 
  const TabNavigator = () => {
 
    return (
      <Tabs.Navigator>
        <Tabs.Screen
         name='Home'
         component={Usuario}
         options={{
           tabBarLabel:'Home',
           tabBarIcon:({color,size})=>(
            // <Icon as={AntDesign} name={'user'} color={'#C6C6C8'} fontSize={5}/>
            <AntDesign name='user' color={'green'} size={26}/>
           )
         }}
        /> 
        <Tabs.Screen
         name='Time'
         component={Time}
         options={{
           tabBarLabel:'Time',
           tabBarIcon:({color,size})=>(
            <Icon as={AntDesign} name={'user'} color={'#C6C6C8'} fontSize={5}/>
            // <AntDesign name='user' color={'green'} size={26}/>
           )
         }}
        />
      </Tabs.Navigator>
    );
  };
 
 
  export default TabNavigator;
 