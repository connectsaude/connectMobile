import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ExamsCard } from '../../components/ExamsCard';
import { styles } from './styles';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { ListExams } from '../../utils/ListExames';
import { ButtonAdd } from '../../components/ButtonAdd';
import { useNavigation } from '@react-navigation/native';

export function Exams(){

  const navigator = useNavigation();

  function handleCreate(){
    navigator.navigate('Novo Agendamento')
  }
  return(
    <>
    <HeaderNavigate 
    title="Meus Exames"
    action={
      <ButtonAdd 
        onPress={handleCreate}
      />
    }
    />
    <View style={styles.content} >
        <Text  style={styles.textTitle}>Lista de Seus Exames</Text>
      </View>
    <View>
    <FlatList
        data={ListExams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
        <View style={styles.container} >
          <ExamsCard 
          id={item.id}
          date={item.date}
          exams={item.exams}
          locale={item.locale}
          procedures={item.procedures}
          unity={item.unity}
          contact={item.contact}
          />
          </View>
        }
      />

      
    </View>
    </>
  )
}