import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
    <StatusBar
        barStyle="light-content"
        backgroundColor="#5697BF"
        translucent
      />
      <Routes />
    </>
  );
}