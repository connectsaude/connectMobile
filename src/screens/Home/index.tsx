import React from 'react';
import { View, FlatList } from 'react-native'; 
import { Header } from '../../components/Header';
import { ListHome } from '../../components/ListHome'
import { ListItensHome } from '../../utils/ListItensHome';
import { styles } from './styles';

export function Home(){

  return(
    <>
    <Header />
    <View style={styles.container} >
      <FlatList
        data={ListItensHome}
        renderItem={({item}) => <ListHome  title={item.title} icon={item.icon} />}
        numColumns={3}
      />
    </View>
    </>
  );
}