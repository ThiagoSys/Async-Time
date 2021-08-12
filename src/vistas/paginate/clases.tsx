import React, { Component,createRef, useEffect, useRef } from 'react'
import { Button, Platform, StyleSheet, Text, TextInput, View } from "react-native"

interface Props {
    name: string;
}
interface State {
    valName:any,
    contador: number,
}
class TimeComponente extends Component<Props, State> {

    constructor(props:Props){
        super(props);
        this.state = { 
            contador: 0,
            valName:'',
            // inputEl: useRef(null)
        }
        // useEffect(()=>{
        //     console.log('El contador se actualizo 11')
        // },[this.state.contador])     
    }
    pressBtn = ()=>{
        console.log('PRESSS BTN')
      }
    
    pressValName = (valor:any) =>{
        console.log('PRRESSSSSSS ')
        this.setState({
            ...this.state,
            valName:valor
        })
    }
    pressFocus = ()=>{
        console.log('FOCUSSS ENCEDIDO')
      }
    
    pressLayout = ()=>{
        console.log('FOCUSSS CENTRO NOW')
      }
    
    pressBlur = ()=>{
        console.log('FOCUSSS APAGADO')
      }

    render(){
        const {valName,contador} = this.state

        return (
            <View>
                <TextInput style={[{backgroundColor:'#F4F6F6', marginVertical:5,borderRadius:10,paddingLeft:5},Platform.OS=='ios'?{height:30}:{}]} value={valName} placeholder={'ref'} keyboardType={'default'} secureTextEntry={false} onChangeText={(valor)=>this.pressValName(valor)} onFocus={this.pressFocus} onBlur={this.pressBlur}/>
                <Text>
                    My numero {contador}
                </Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      alignSelf: 'center'
    },
    buttons: {
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'stretch',
      alignSelf: 'center',
      borderWidth: 5
    },
    button: {
      flex: 1,
      paddingVertical: 0
    },
    greeting: {
      color: '#999',
      fontWeight: 'bold'
    }
  });
export default TimeComponente