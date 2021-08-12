import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"


interface props{
    dataUsuario:any
}

export const BDUsuario = () => {

    let dataBegin = new Array()
    let dataEnd = new Array()
    const [action, setAction] = useState(new Array())


    // console.log('AAAAAAAAAAAA')

    const ReadGet = async ()=>{
        try{
            const value = await AsyncStorage.getItem('usuario')

            if(value!==null){
              if(JSON.parse(value).length!==0){
                dataEnd = JSON.parse(value)
                // setAction(dataEnd)
                console.log('NULLL', dataEnd)
                return dataEnd
              }else{
                console.log('NOT ', JSON.parse(value))
                // dataEnd = JSON.parse(value)
                // setAction(dataEnd)
                return dataEnd
              }
            }else{
              console.log('NOT SIN DATOS')
              setAction(dataEnd)
              return await AsyncStorage.setItem('usuario',JSON.stringify(action))
            }
           } catch(err) {
             console.log('ERROR', err)
           }
    }
    // ReadGet()

    const InsertSet = async () =>{
      const obj = {name:'thiago', last:'romero'}
      const z = dataEnd.push(obj)
      setAction(dataEnd)
      console.log('222',dataEnd, z)
      const value = await AsyncStorage.setItem('usuario',JSON.stringify(dataEnd))

      return console.log('111',dataEnd)
      // con
      // if(value!==null){
      //   if(JSON.parse(value).length!==0){
      //     console.log('NULLL', JSON.parse(value))
      //     console.log('',value)
      //     // AsyncStorage.setItem('usuario',)
      //   }else{
      //     console.log('NOT ', JSON.parse(value))
      //   }
      // }else{
      //   console.log('NOT NULLLL', value)
      // }
    // await AsyncStorage.setItem('usuario',JSON.stringify(UID123_object),()=>{
    //   AsyncStorage.mergeItem('usuario',JSON.stringify(UID123_delta), ()=>{
    //     AsyncStorage.getItem('usuario',(err,result)=>{
    //       console.log('FINN',result)
    //     })
    //   })
    // })
    // await AsyncStorage.setItem('usuario',JSON.stringify(UID123_object))
   }
    return {
        ReadGet,
        InsertSet,
        action,
        dataEnd,
    }
}