import React, { useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { ListSchedules } from '../../utils/ListSchedules';
import { SchedulesCard } from '../../components/SchedulesCard';



import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler';

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


  const [schedules, setSchedules] = useState<SchedulesProps>();
  const modalizeRef = useRef<Props>(null);

  function handleModal(id: string) {
    setSchedules(ListSchedules.find(list => list.id === id))
    modalizeRef.current?.open();
  }

  return (
    <>
      <View>
        <HeaderNavigate
          title="Agendamentos"
          action={
            <ButtonAdd />
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
            onPress={() => handleModal(item.id)}
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
