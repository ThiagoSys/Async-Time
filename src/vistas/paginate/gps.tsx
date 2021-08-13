import { Icon } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

const GPS = () => {
    return(
        <>
            <View>
                <Text>
                    MY GPS ACTIVO
                </Text>
                <Icon as={Ionicons} name={'star-outline'} size={50} color={'red'}/>
            </View>
        </>
    )
}

export default GPS