
import React, { ReactNode } from 'react';
import { View, Text } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles'


type Props = {
  title:  string;
  action?: ReactNode;
}

export function HeaderNavigate({ title, action }: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <View style={styles.container} >
      <BorderlessButton onPress={handleGoBack}>
      <Feather name="arrow-left" size={24} color="#0B80C8" />
      </BorderlessButton>
      <Text style={styles.title} >{title}</Text>
     { 
      action &&
      <View>
       { action }
     </View>
     }
    </View>
  );
}