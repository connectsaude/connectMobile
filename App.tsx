import React from 'react';
import { StatusBar } from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { useFonts } from 'expo-font';
import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
    <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    <SignIn />
    </>
  );
}