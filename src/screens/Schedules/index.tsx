import React, { useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { ListSchedules } from '../../utils/ListSchedules';
import { SchedulesCard } from '../../components/SchedulesCard';



import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
  open: () => void;

}

type SchedulesProps = {
  id: string;
  type: string;
  date: string;
  status: string;
  locale: string;
  contat: string;
}

export function Schedules({ open }: Props) {

  const navigator = useNavigation();

  function handleCreate(){
    navigator.navigate('Novo Agendamento')
  }

  return (
    <>
      <View>
        <HeaderNavigate
          title="Agendamentos"
          action={
            <ButtonAdd 
              onPress={handleCreate}
            />
          }
        />
      </View>
      <View style={styles.content} >
        <Text  style={styles.textTitle}>Agendamentos</Text>
      </View>
      
      <FlatList
        data={ListSchedules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
        <View style={styles.container} >
          <SchedulesCard
            id={item.id}
            date={item.date}
            type={item.type}
            locale={item.locale}
            status={item.status}
          />
          </View>
        }
      />
      
    </>
  );
}
