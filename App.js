import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading'

import Cesta from './src/views/Cesta';
import mocks from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });


  if(!fonteCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Cesta {...mocks}></Cesta>
    </SafeAreaView>
  );
}