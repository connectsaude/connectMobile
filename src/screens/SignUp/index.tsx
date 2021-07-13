import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LogoPP from '../../assets/LogoPP.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles'

export function SignUp() {

  const navigator = useNavigation();

  function hangleCadSucess() {
    navigator.goBack();
  }

  return (
    <View style={styles.container} >
      <LogoPP />
      <Text style={styles.textLabel} >Vamos realizar seu Cadastro</Text>
      <ScrollView style={styles.scroll} >
        <View style={styles.content} >
          <Text style={styles.textLabel} >Nome :</Text>
          <Input
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu Primeiro Nome"
          />
          <Text style={styles.textLabel}>Sobrenome :</Text>
          <Input
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu Sobrenome"
          />

          <Text style={styles.textLabel} >Seu CPF :</Text>
          <Input
            returnKeyType="next"
            keyboardType="numeric"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu CPF"
          />

          <Text style={styles.textLabel} >Data de Nascimento :</Text>
          <Input
            returnKeyType="next"
            keyboardType="numeric"
            placeholderTextColor="#5697BF"
            placeholder="DD/MM/AAAA"
          />

          <Text style={styles.textLabel} >Digite sua Senha :</Text>
          <Input
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite sua Senha"
          />

          <Text style={styles.textLabel} >Confirme sua Senha :</Text>
          <Input
            returnKeyType="send"
            placeholderTextColor="#5697BF"
            placeholder="Confirme sua senha"
          />

          <Button onPress={() => hangleCadSucess()} >
            Cadastrar
          </Button>

        </View>
      </ScrollView>
    </View>
  );
}