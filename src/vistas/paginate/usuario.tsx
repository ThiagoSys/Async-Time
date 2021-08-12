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
 import React, { Component, useContext, useState, createRef, useRef, useEffect}from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
 
  import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Alert,
    Platform,
    Touchable,
    TouchableOpacity,
    Keyboard,
  } from 'react-native';
import { AuthContext } from '../../redux/authcontext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 
 interface listProps{
   list:any,
   press:(i:any)=> void,
 }
   const ListCanje = ({list, press}:listProps)=>{
     return list.map((item:any,key:any)=>{
       const itemPress =()=>{ press(key) }       
          return(
             <View style={{position:'relative',height:80,backgroundColor:'#F8F9F9', margin:10,borderRadius:5, padding:5,justifyContent:'center'}} key={key}>
               <View>
                 <Text>Item: {key+1}</Text>
                 <Text>Code: {item.id}</Text>
                 <Text>Nombre: {item.name}</Text>
                 <Text>Apellido: {item.last}</Text>
               </View>
               <View style={{position:'absolute', borderRadius:100,right:0,margin:5}}>
                 <TouchableOpacity onPress={itemPress} style={{backgroundColor:'#F1948A',height:30, width:30,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{fontWeight:'bold',color:'white'}}>X</Text>
                 </TouchableOpacity>
               </View>
             </View>
           )
       })
   }
 
  interface reProps {
    inputNameRef : any,
    inputLastRef : any,
  }
  const Usuario = ({inputNameRef, inputLastRef}:reProps) => {
 
     const {canjes, addCanje, dropCanje, dropItemCanje} = useContext(AuthContext)
 
     const [valName, setValName]= useState('')
     const [valLast, setValLast]= useState('')
     const [valview, setValView]= useState(true)
     inputNameRef = useRef()
     inputLastRef = useRef()

     const newA = JSON.stringify(canjes)
     const newB = JSON.parse(newA)
 
     useEffect(()=>{
       console.log('MY FOCUS')
     },[inputNameRef])
     const limpiar = () =>{
         setValName('')
         setValLast('')
     }
    const dataSetAsync = () =>{
      if(valName!=='' && valLast!==''){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyzZ0123456789';
        let canjeCodigo= '';
        const charactersLength = characters.length;
        for ( let i = 0; i < 12; i++ ) {
            canjeCodigo += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       addCanje({id:canjeCodigo,name:valName.toUpperCase(),last:valLast.toUpperCase()})
       limpiar()
      }else{
        console.log('WELCOMEE')
        Alert.alert('Confirmar', 'Llene los campos',[ {
         text:'OK', onPress: removeError
         }]
       )
      }
    }
    const removeError =()=>{
      const a = valview
      setValView(!a)
      if(valName==''){ return inputNameRef.current.focus()}
      if(valLast==''){ return inputLastRef.current.focus()}
      limpiar()
    }
    const dataDelAsync = async () =>{
     Alert.alert('Confirmar', 'Esta seguro de elimar los datos',[ {
       text:'NO'
       },{text:'SI', onPress: () => dropCanje()}]
     )
   }
   const pressValName = (valor:any) =>{
     setValName(valor)
   }
   const pressValLast = (valor:any) =>{
     setValLast(valor)
   }
 
   const CountID = (id:any)=>{
     dropItemCanje({id:id,name:id,last:id})
   }
 
   const pressFocus = ()=>{
     console.log('FOCUSSS ENCEDIDO')
   }
 
   const pressBlur = ()=>{
     console.log('FOCUSSS APAGADO')
   }
 
    return (
      <KeyboardAwareScrollView>
        <StatusBar barStyle={'light-content'} />
        <ScrollView showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic">
           <View style={{margin:10,padding:5}}>
             <TextInput ref={inputNameRef} style={[{backgroundColor:'#F4F6F6', marginVertical:5,borderRadius:10,paddingLeft:5},Platform.OS=='ios'?{height:30}:{}]} value={valName} placeholder={'Nombres'} keyboardType={'default'} secureTextEntry={false} onChangeText={(valor)=>pressValName(valor)} onFocus={pressFocus} onBlur={pressBlur}/>
             <TextInput ref={inputLastRef} style={[{backgroundColor:'#F4F6F6', marginVertical:5, borderRadius:10,paddingLeft:5}, Platform.OS=='ios'?{height:30}:{}]} value={valLast} placeholder={'Apellidos'} keyboardType={'default'} secureTextEntry={false} onChangeText={(valor)=>pressValLast(valor)}/>
           </View>
          <View>
             <Button title='Agregar Data' onPress={dataSetAsync}/>
             <Button title='Eliminar Data' onPress={dataDelAsync}/>
          </View>
 
          <View>
            {newB==0?(
              <View style={{height:200, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20}}>No registra datos</Text>
              </View>
              ):(
               <ListCanje list={newB} press={CountID}/>
               )}
          </View>
 
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  };
 
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
 
  export default Usuario;
 