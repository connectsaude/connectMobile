import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';


import { styles } from './styles'


export function CardProfile(){

  const cardPosition = useSharedValue(RFPercentage(-35));


  useEffect(() => {

      cardPosition.value = withTiming(0, {
        duration: 700,
        easing: Easing.bounce
      })

  },[])

  const style = useAnimatedStyle(() => {
    return{
      transform: [{ 
        translateY: cardPosition.value,
      }],
    }
  })

  return(
    <View style={styles.contentProfile} >
        <Animated.View style={[styles.cardProfile , style]}>
          <View style={styles.contentimage} >
            <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Daniel_em_abril_de_2018_%28cropped%29.jpg',}}/>
          </View>
          <View style={styles.contentDetails} >
          <Text style={styles.textTitle} >Bem Vindo Daniel !</Text>
          <Text style={styles.textDetails}>Tipo Sanquineo O+</Text>
          </View>
        </Animated.View>
      </View>
  )
}