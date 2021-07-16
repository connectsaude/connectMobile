import React from 'react';
import { View, FlatList, Text } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'
import { Header } from '../../components/Header';
import { ListHome } from '../../components/ListHome'
import { ListItensHome } from '../../utils/ListItensHome';
import { styles } from './styles';

export function Home(){

  const navigator = useNavigation();

  function handleSchedules(title: String){

      navigator.navigate(`${title}`)
    
  }

  return(
    <>
    <Header />
    <View >
      <View style={styles.welcome}>
        <Text style={styles.textWel} >A Medicina na palma da sua mão !</Text>
      </View>
      
    </View>

    <FlatList
    
        data={ListItensHome}
        keyExtractor={(item) => item.id }
        renderItem={({item}) => 
        <View style={styles.teste} >
          <ListHome 
         
        onPress={() => handleSchedules(item.title)}
        title={item.title} 
        icon={item.icon}
        
        />
        </View>
      }
        numColumns={3}
      />


    </>
  );
}