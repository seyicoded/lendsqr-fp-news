import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import codePush from "react-native-code-push";
import { Provider as PaperProvider} from 'react-native-paper'
import Splash from './src/screens/splash/splash';
import {Provider as ReduxProvider, useSelector} from 'react-redux'
import { Store } from './src/storage/redux/store';
import MainStack from './src/navigations/mainStack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message'
// import Async from '@react-native-async-storage/async-storage'

// Async.clear();

GoogleSignin.configure();

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {
  const [showSplash, setShowSplash] = useState(true)
  
  useEffect(()=>{
    setTimeout(() => {
      setShowSplash(false)
    }, 4200);
  }, [])

  if(showSplash){
    return <Splash />
  }
  
  return (
    <PaperProvider>
      <ReduxProvider store={Store}>
        <Toast />
        <MainStack />
      </ReduxProvider>
    </PaperProvider>
  );
};

export default codePush(codePushOptions)(App);
