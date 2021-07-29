import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { ListHome } from '../../components/ListHome'
import { ListItensHome } from '../../utils/ListItensHome';
import { styles } from './styles';
import { CardProfile } from '../../components/CardProfile';

export function Home() {

  const navigator = useNavigation();

  function handleSchedules(title: String) {

    navigator.navigate(`${title}`)
  }

  return (
    <>
      <Header />
      <CardProfile />
      <FlatList
        data={ListItensHome}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <View style={styles.container} >
            <View style={styles.content} >
            <ListHome
              onPress={() => handleSchedules(item.title)}
              title={item.title}
              icon={item.icon}
            />
            </View>
          </View>
        }
        numColumns={3}
      />
    </>
  );
}