import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


import { styles } from './styles';
import { RFPercentage } from "react-native-responsive-fontsize";

type Props = {
  date: string;
  status: string;
  type: string;
  locale: string;
  id: string;
  onPress: (id: GestureResponderEvent) => void;
}

export function SchedulesCard({ id, date, type, onPress, status, locale }: Props) {

  const [details, setDetails] = useState(false);
  const heightnew = useSharedValue(RFPercentage(20))
  const [colors, setColors] = useState('');

  useEffect(() => {
    if (status == 'Agendado') {
      setColors('#38A169')
    } else if (status == 'Cancelado') {
      setColors('#E53E3E')
    } else if (status == 'Efetuado') {
      setColors('#718096')
    }
  }, [])

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
            <Text style={styles.textDate} >Status</Text>
            <Text style={styles.textDate} >{status}</Text>
            <FontAwesome name="square" size={24} color={colors} />
          </View>
          <View style={styles.contentDetails} >
            <Text style={styles.textTitle} >{type}</Text>
          </View>
          <View style={styles.contentDetails} >
            <Text style={styles.textDate} >Local :{locale}</Text>
          </View>
          <View style={styles.contentDetails} >
            <Text style={styles.textDate} >Data :{date}</Text>
          </View>
          <View style={styles.content} >
            <Text style={styles.textDate} >N:{id}</Text>
            <TouchableOpacity
              onPress={handleClosedDetails}
            >
              <Text style={styles.textDate} >Menos Detalhes</Text>
            </TouchableOpacity>
            {status === 'Agendado' && 
            <View>
            <FontAwesome name="trash-o" size={24} color="red" />
          </View>
            }
          </View>
        </>
        :
        <>
          <View style={styles.content} >
            <Text style={styles.textDate} >Status</Text>
            <Text style={styles.textDate} >{status}</Text>
            <FontAwesome name="square" size={24} color={colors} />
          </View>
          <View style={styles.contentDetails} >
            <Text style={styles.textTitle} >{type}</Text>
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