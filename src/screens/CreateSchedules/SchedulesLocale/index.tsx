import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from '../../../components/Button';
import { HeaderNavigate } from '../../../components/HeaderNavigate';
import { ListLocale } from '../../../components/ListLocale';

import { styles } from './styles'

export function SchedulesLocale() {

  const navigator = useNavigation();

  function handleFinish(){
    navigator.navigate('Home');
  }

  return (
    <View style={styles.container} >
      <HeaderNavigate
        title="Localização"
      />
      <View style={styles.content} >
        <Text style={styles.textTitle}>Selecione uma Unidade</Text>
      </View>
      <ListLocale />
      <Button onPress={handleFinish} >
        Realizar Agendamento
      </Button>
    </View>
  )
}