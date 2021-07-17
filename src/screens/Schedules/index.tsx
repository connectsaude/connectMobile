import React, { useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { ButtonAdd } from '../../components/ButtonAdd';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { ListHome } from '../../components/ListHome';
import { ListSchedules } from '../../utils/ListSchedules';
import { ListTable } from '../../components/ListTable';
import Agendamento from '../../assets/Agendamento.svg';
import ImgAgenda from '../../assets/imgAgendamento.svg';


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
        <View style={styles.img} >
        <ImgAgenda style={styles.img2} />
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <ListTable
            onPress={() => handleModal(item.id)}
            date={item.date}
            type={item.type}
            status={item.status}
          />
        }
      />

      <Modalize
        ref={modalizeRef}
        snapPoint={280}
        modalHeight={280}
        HeaderComponent={
          <View style={styles.containerModal} >
            <Text style={styles.titleModal} >Detalhes do Agendamento</Text>
          </View>
        }
      >

        <View style={styles.contentModal} >
          <Text style={styles.textModal} >Tipo do Exame :
            <Text style={styles.textAgend} >{schedules?.type}</Text></Text>
          <Text style={styles.textModal} >Data do Agendamento :
            <Text style={styles.textAgend} >{schedules?.date}</Text></Text>
          <Text style={styles.textModal} >Local :
            <Text style={styles.textAgend} >{schedules?.locale}</Text></Text>
          <Text style={styles.textModal} >Contato :
            <Text style={styles.textAgend} >{schedules?.contat}</Text> </Text>
          <Text style={styles.textModal} >Status :
            <Text style={styles.textAgend} >{schedules?.status}</Text> </Text>
        </View>
        {schedules?.status !== 'Agendado' || 'Efetuado' &&
          <View style={styles.button} >
            <RectButton style={styles.buttonModal} >
              <Text style={styles.textButton} >Cancelar Agendamento</Text>
            </RectButton>
          </View>
        }
      </Modalize>
    </>
  );
}
