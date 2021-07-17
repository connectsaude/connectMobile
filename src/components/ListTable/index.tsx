import React from "react";
import { Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles'
import { BorderlessButton } from "react-native-gesture-handler";

type Props = {
  date: string;
  status: string;
  type: string;
  onPress: (id : GestureResponderEvent) => void;
}

export function ListTable({  date, type,onPress, status }: Props){

  return(
    <View style={styles.container} >
      <Text style={styles.text} >{date}</Text>
      <Text style={styles.text} >{type}</Text>
      <Text style={styles.text} >{status}</Text>
      <TouchableOpacity 
      onPress={onPress}
      style={styles.link} >
      <FontAwesome name="search-plus" size={24} color="#0B80C8" />
      </TouchableOpacity>
    </View>
  );
}