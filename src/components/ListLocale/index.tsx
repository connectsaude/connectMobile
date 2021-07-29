import React, { ReactNode, useState } from 'react';

import { FlatList, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ListLocation } from '../../utils/ListLocation';

import { styles } from './styles';

type ListProps = {
  id: string;
  locale: string;
  name: string;
}

export function ListLocale() {

  const [selected, setSelected] = useState<ListProps>();
  const [select, setSelect] = useState(false);
  const [styl, setStyl] = useState('');

  function handleSelected(id: string) {
    const findItem = ListLocation.find(item => item.id === id);
   
    setSelect(true)
    setSelected(findItem);

  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {select ?
          <View style={styles.header}>
            <View style={styles.titleCenter}>
              <Text style={styles.title} >Unidade Selecionada</Text>
            </View>
            <Text style={styles.titleHeader} >Nome da Unidade : <Text style={styles.titleHeader1} >{selected?.name}</Text></Text>
            <Text style={styles.titleHeader} >Endereço : <Text style={styles.titleHeader1} >{selected?.locale}</Text></Text>
          </View>
          :
          <View style={styles.headerSolo}>
            <Text style={styles.titleHeaderSolo} >As Unidade estão Listadas Abaixo</Text>
          </View>
        }
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ListLocation}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
           <View style={styles.containerCard}>
              <RectButton
              style={styles.contentCard}
              onPress={() => handleSelected(item.id)}
            >
              <Text style={styles.name}>Nome da Unidade : <Text style={styles.name1} >{item.name}</Text></Text>
              <Text style={styles.name}>Endereço : <Text style={styles.name1} >{item.locale}</Text></Text>
            </RectButton>
           </View>

          }
        />
      </View>
    </View>
  )
}