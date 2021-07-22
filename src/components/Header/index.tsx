import React from 'react';
import { View, Text, StatusBar } from 'react-native'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import { styles } from './styles'

export function Header(){
  return(
    <View style={styles.container} >
      <View style={styles.menu} >
      <Feather name="menu" size={35} color="#0B80C8" />
      </View>
      <View style={styles.textLabel} >
      <Text style={styles.title} >ConnectSaude+</Text>
      </View>
      <View style={styles.notification} >
      <AntDesign name="bells" size={28} color="#0B80C8" />
      </View>
    </View>
  );
}
