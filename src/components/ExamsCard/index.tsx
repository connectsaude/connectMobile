import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


import { styles } from './styles';
import { RFPercentage } from "react-native-responsive-fontsize";

type Props = {
  date: string;
  exams: string;
  procedures: string;
  unity: string;
  contact: string;
  locale: string;
  id: string;
}

export function ExamsCard({
  id,
  date,
  exams,
  procedures,
  locale,
  unity,
  contact }: Props) {

  const [details, setDetails] = useState(false);
  const heightnew = useSharedValue(RFPercentage(20))
  const [colors, setColors] = useState('');

  const style = useAnimatedStyle(() => {
    return {
      height: heightnew.value,
    }
  })

  function handleOpenDetails() {
    heightnew.value = withTiming(RFPercentage(35), {
      duration: 400,
    })
    setTimeout(() => {
      setDetails(!details);
    }, 100)
  }
  function handleClosedDetails() {
    heightnew.value = withTiming(RFPercentage(20), {
      duration: 400,
    })
    setTimeout(() => {
      setDetails(!details);
    }, 100)

  }

  return (
    <Animated.View style={[styles.container, style]} >
      {details ?
        <>
          <View style={styles.content} >
            <Text style={styles.textDate} >Realizado</Text>
            <Text style={styles.textDate} >{date}</Text>
            <MaterialCommunityIcons name="download" size={24} color='black' />
          </View>
          <View style={styles.contentTitle} >
            <Text style={styles.textExams} >{exams}</Text>
            <Text style={styles.textProcedures} >{procedures}</Text>
          </View>
          <View style={styles.contentDetails} >
            <Text style={styles.textDate} >Local : {locale}</Text>
            <Text style={styles.textDate} >Unidade : {unity}</Text>
          </View>
          <View style={styles.contentDetails} >
            <Text style={styles.textDate} >Contato : {contact}</Text>
          </View>
          <View style={styles.content} >
            <Text style={styles.textDate} >N:{id}</Text>
            <TouchableOpacity
              onPress={handleClosedDetails}
            >
              <Text style={styles.textDate} >Menos Detalhes</Text>
            </TouchableOpacity>
          </View>
        </>
        :
        <>
          <View style={styles.content} >
            <Text style={styles.textDate} >Realizado</Text>
            <Text style={styles.textDate} >{date}</Text>
            <MaterialCommunityIcons name="download" size={24} color='black' />
          </View>
          <View style={styles.contentTitle} >
            <Text style={styles.textExams} >{exams}</Text>
            <Text style={styles.textProcedures} >{procedures}</Text>
          </View>
          <View style={styles.content} >
            <Text style={styles.textDate} >N:{id}</Text>
            <TouchableOpacity
              onPress={handleOpenDetails}
            >
              <Text style={styles.textDate} >Mais Detalhes</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </Animated.View>
  );
}