import { Icon } from 'native-base'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MapView from 'react-native-maps'

import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

interface props {
    navigation:any,
}

const Destino = ({navigation}:props) => {
    const nextPress = ()=>{
        navigation.navigate('indexMapa')
    }
    return(
                <View style={{flex:1}}>

                <View style={{flex:1}}>
                    <Text style={{textAlign:'center'}}>
                        MY DESTINO ES
                    </Text>
                    {/* <View style={{alignItems:'center', paddingVertical:50}}>
                        <Icon as={Ionicons} name={'star-outline'} size={50} color={'orange'}/>
                    </View> */}
                    <View style={{alignItems:'center', paddingVertical:10}}>
                        <TouchableOpacity style={{backgroundColor:'orange', width:'50%', justifyContent:'center' , alignItems: 'center', borderRadius:10}} onPress={nextPress}>
                            <Text style={{color:'white', paddingVertical:5}}>
                                UBICACION
                            </Text>
                        </TouchableOpacity>
                    </View>                    
                </View>

                    <MapView
                        style={{flex:1}}
                        initialRegion={{
                            latitude:37.78825,
                            longitude:-122.4324,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421,
                        }}
                    />
                </View>
    )
}

export default Destino