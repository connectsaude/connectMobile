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
            <Image style={styles.image} source={{uri: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/8230/production/_115482333_gettyimages-641517806.jpg',}}/>
          </View>
          <View style={styles.contentDetails} >
          <Text style={styles.textTitle} >Bem Vindo Daniel !</Text>
          <Text style={styles.textDetails}>Tipo Sangueneo O+</Text>
          </View>
        </Animated.View>
      </View>
  )
}