import React, { Component,createRef, useEffect, useRef, useState} from 'react'
import { useMemo } from 'react'
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View, TouchableNativeFeedback, Keyboard, TouchableHighlight} from "react-native"

interface Props {
    expiryTimestamp:any,
    time:any,
}
interface State {
    contador: number,
    inputRef:any,
    tiempo0:any,
    tiempo1:any,
}


const Time  = ({ contador, inputRef, tiempo0, tiempo1 }:State)=> {
    contador = 0
    const [valHora, setValHora ] = useState('00')
    const [valMinuto, setValMinuto ] = useState('00')
    const [valSegundo, setValSegundo ] = useState('00')
    const [valReHora, setReValHora ] = useState('00')
    const [valReMinuto, setReValMinuto ] = useState('00')
    const [valReSegundo, setReValSegundo ] = useState('00')

    const renderizado = useRef(0)
    const show = useRef(false)

    inputRef = useRef()
    tiempo0 = useRef()
    tiempo1 = useRef()


    const Dia =(a:any) =>{ return `${JSON.stringify(a).length==1?'0'+a:a}` }
    const Mes =(a:any) =>{ return `${JSON.stringify(a).length==1?'0'+a:a}` }
    const Year = (a:any)=>{ return `${JSON.stringify(a)}` }
    const Hora = (a:any)=>{ return `${JSON.stringify(a).length==1?'0'+a:a}` }
    const Minuto = (a:any)=>{ return `${JSON.stringify(a).length==1?'0'+a:a}` }
    const Segundo = (a:any)=>{ return `${JSON.stringify(a).length==1?'0'+a:a}` }
    const Semana = (a:any)=>{
        if(JSON.stringify(a)=='0'){ return 'Domingo' }
        if(JSON.stringify(a)=='1'){ return 'Lunes' }
        if(JSON.stringify(a)=='2'){ return 'Martes' }
        if(JSON.stringify(a)=='3'){ return 'Miercoles' }
        if(JSON.stringify(a)=='4'){ return 'Jueves' }
        if(JSON.stringify(a)=='5'){ return 'Viernes' }
        if(JSON.stringify(a)=='6'){ return 'Sabado' }
    } 
    const dateNew1 = new Date(tiempo0.current)
    const dateNew = new Date()
    const dia = dateNew.getDate()
    const mes = dateNew.getMonth()+1
    const year = dateNew.getFullYear()
    const semana = dateNew.getDay()
    const hora = dateNew.getHours()
    const minuto = dateNew.getMinutes()
    const segundo = dateNew.getSeconds()
    const fecha = `${Dia(dia)+'/'+Mes(mes)+'/'+Year(year)}`
    const time = `${Hora(hora)+':'+Minuto(minuto)+':'+Segundo(segundo)}`
    const diaSemana = `${Semana(semana)}`

    useMemo(()=>{
      if(show.current){
        const AA = dateNew1.setSeconds(dateNew1.getSeconds()+90)
        const BB = dateNew.setSeconds(dateNew.getSeconds())
        const MILLISECONDS_OF_A_SECOND = 1000;
        const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
        const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
        const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24 
    
        const DURATION = AA-BB
        const RE_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY)
        const RE_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR)
        const RE_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE)
        const RE_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND)

        const a = RE_HOURS.toString().length==1?'0'+RE_HOURS:RE_HOURS.toString()
        const b = RE_MINUTES.toString().length==1?'0'+RE_MINUTES:RE_MINUTES.toString()
        const c = RE_SECONDS.toString().length==1?'0'+RE_SECONDS:RE_SECONDS.toString()
        return setTimeout(()=>{
          console.log('Time', RE_DAYS, RE_HOURS,RE_MINUTES,RE_SECONDS, tiempo0.current)
          console.log('TIME1',AA)
          console.log('TIME2',BB)
          setReValHora(a)
          setReValMinuto(b)
          setReValSegundo(c)
        },1000)
      }else{
        setReValHora('00')
        setReValMinuto('00')
        setReValSegundo('00')
      }
    },[show.current, valReSegundo])

       useMemo(()=>{
          const a = hora.toString().length==1?'0'+hora:hora.toString()
          const b = minuto.toString().length==1?'0'+minuto:minuto.toString()
          const c = segundo.toString().length==1?'0'+segundo:segundo.toString()
           return setTimeout(()=>{
              setValHora(a)
              setValMinuto(b)
              setValSegundo(c)
            },1000)
        },[valSegundo])

    const Long = ()=>{
      console.log('LONNNNN PRESS')
      tiempo0.current = new Date()
      show.current = true
    }

    const pressIn = ()=>{
      console.log('BEGIN')
    }
    const pressOut = ()=>{
      show.current = false
      console.log('ENDDDDD')
    }
        return (
            <View style={{flex:1}}>

                <View style={{flex:1, backgroundColor:'rgba(0,0,0,.5)', justifyContent:'center', alignItems:'center'}}>
                  <Text style={{textAlign:'center',color:'white', fontSize:20, paddingVertical:10}}>Rescate en 01:30 </Text>
                  <TouchableOpacity onLongPress={Long} onPressIn={pressIn} onPressOut={pressOut} style={{height:200, width:200, borderRadius:100, backgroundColor:'red'}}>
                    <View style={{height:'100%',borderRadius:100,justifyContent:'center'}}>
                      <Text style={{color:'white', textAlign:'center', fontSize:30}}>Pulsar</Text>
                      <Text style={{color:'white', textAlign:'center'}}>{valReHora}:{valReMinuto}:{valReSegundo}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{marginVertical:5, justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontSize:20}}>{valHora}:{valMinuto}:{valSegundo}</Text>
                  </View>

                </View>

            </View>
        )
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
export default Time