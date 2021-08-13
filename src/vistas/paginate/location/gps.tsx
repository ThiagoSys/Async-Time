import { Icon } from 'native-base'
import React, { useContext } from 'react'
import { Alert } from 'react-native'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../../redux/authcontext'
Ionicons.loadFont()
interface props {
    navigation: any
  }
const GPS = ({navigation}:props) => {


    const {locationState, askLocationPermissions} = useContext(AuthContext)

    const nextPress = async ()=>{
        askLocationPermissions()
        // navigation.navigate('indexDestino')
    }
    return(
        <>
            <View>
                <Text style={{textAlign:'center', marginTop:50}}>
                    MY GPS PRUEBAS {locationState}
                </Text>
                <View style={{alignItems:'center', paddingVertical:50}}>
                    {/* <Icon as={Ionicons} name={'location'} size={50} color={'green'}/> */}
                </View>
                <View style={{alignItems:'center', paddingVertical:10}}>
                    <TouchableOpacity style={{backgroundColor:'orange', width:'50%', justifyContent:'center' , alignItems: 'center', borderRadius:10}} onPress={nextPress}>
                        <Text style={{color:'white', paddingVertical:5}}>
                            ACTIVAR GPS
                        </Text>
                        <Icon as={Ionicons} name={'map'} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default GPS