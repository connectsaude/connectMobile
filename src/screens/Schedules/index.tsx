import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { ListHome } from '../../components/ListHome';
import { ListSchedules } from '../../utils/ListSchedules';
import { ListTable } from '../../components/ListTable';
import Agendamento from '../../assets/Agendamento.svg';

import { styles } from './styles'

export function Schedules(){

  return(
    <>
    <View>
      <HeaderNavigate 
      title="Agendamentos"
      action={
        <ButtonAdd />
      }
      />
      <View style={styles.container} >
        <ListHome title="Agendamentos" icon={Agendamento} />
        <Text style={styles.title} >Meus Agendamentos</Text>
        <View />
      </View>
      <View style={styles.titleList} >
        <Text style={styles.textList} >Data</Text>
        <Text style={styles.textList} >Exame</Text>
        <Text style={styles.textList} >Status</Text>
        <Text />
      </View>

      
    </View>
    <FlatList
    data={ListSchedules}
    keyExtractor={(item) => item.id }
    renderItem={({item}) => 
    <ListTable 
    date={item.date}
    type={item.type}
    status={item.status}
  />
    }
  />
  </>
  );
}