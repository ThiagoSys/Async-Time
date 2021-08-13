import React from 'react';

import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { GPS, Destino, Mapa } from './location'; 
import { useContext } from 'react';
import { AuthContext } from '../../redux/authcontext';
const RootStack = createStackNavigator();

interface ScreensProps {
    navigation: any
  }
const Location = ({navigation}:ScreensProps) => {

    const {locationState } = useContext(AuthContext)
    return(
     <RootStack.Navigator 
        screenOptions={{
            headerShown:false,
            headerStyle: {
                backgroundColor: '#3A5AA7',
                shadowColor: '#efefef',
                // height:100
            },
            headerTintColor: '#fafafa',
            headerTitleStyle: {
                // fontWeight: 'normal',
                textAlign: 'center',
                fontSize:18,
                // position:'absolute',
            }
        }}
    >
        {
            locationState==='granted'?(
                <>
                    <RootStack.Screen 
                        name="indexDestino"
                        component={Destino}
                        options={{
                            title:'MoliCard',
                        }}
                    />
                    <RootStack.Screen 
                        name="indexMapa"
                        component={Mapa}
                        options={{
                            title:'MoliCard',
                        }}
                    />
                </>
            ):(
                <RootStack.Screen 
                    name="indexGps"
                    component={GPS}
                    options={{
                        title:'Location',
                    }}
                />               
            )
        }

    </RootStack.Navigator>
    )
}

export default Location;