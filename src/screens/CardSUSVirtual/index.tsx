import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { MaterialCommunityIcons   } from '@expo/vector-icons';
import CartaoSUS from '../../assets/CartaoSUS.png';

import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler';

export function CardSusVirtual(){
  return(
    <>
    <HeaderNavigate 
    title="Cartão SUS Virtual"
    action={
      <RectButton style={styles.buttonDownlaod}>
      <MaterialCommunityIcons   name="download" size={24} color='#ffffff' />
    </RectButton>
    }
    />
    <View style={styles.container} >
     <View style={styles.content}>
     <ImageBackground  source={CartaoSUS} style={styles.image}>
       <View style={styles.cardContent}>
       <Text style={styles.text} >Lorrane Vecanadres Stefani Smith</Text>
       <Text style={styles.text} >N: 5465849651654</Text>
       </View>
     </ImageBackground>

     </View>
    </View>
    </>
  )
}