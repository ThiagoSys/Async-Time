import { Icon } from 'native-base'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MapView from 'react-native-maps'
import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()



interface props {
    navigation:any,
}


// Clave Api Google Maps
// AIzaSyCP0gbu9uWclZ4lygQG8lbD7gr8W-bUUHg


const Mapa = ({navigation}:props) => {
    const nextPress = ()=>{
        navigation.navigate('indexDestino')
    }
    return(
        <>
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Text style={{textAlign:'center'}}>
                        Mi ubicación
                    </Text>
                    <View style={{alignItems:'center', paddingVertical:10}}>
                        <TouchableOpacity style={{backgroundColor:'orange', width:'50%', justifyContent:'center' , alignItems: 'center', borderRadius:10, flexDirection:'row' }} onPress={nextPress}>
                            <Icon as={Ionicons} name={'ios-arrow-undo-sharp'} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Mapa