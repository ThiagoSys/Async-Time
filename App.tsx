import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';


import { AuthProvider } from './src/redux/authcontext';
import TabNavigator from './src/navigate/navegacion';

const AppState = ({children}:any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
 const App = () => {
   return (
     <NativeBaseProvider>
      <NavigationContainer>
        <AppState>
            <TabNavigator/>
        </AppState>
      </NavigationContainer>       
     </NativeBaseProvider>

   );
 };


 export default App;
