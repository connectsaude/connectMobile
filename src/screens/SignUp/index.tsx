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
      <Text style={styles.title} >Vamos realizar seu Cadastro</Text>
      <ScrollView 
      indicatorStyle='white'
      style={styles.scroll} >
        <View style={styles.content} >
          <Input
            Label="Nome :"
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu Primeiro Nome"
          />
          <Input
            Label="Sobrenome :"
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu Sobrenome"
          />
          <Input
            Label="Email :"
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu Email"
          />
          <Input
            Label="Seu CPF :"
            returnKeyType="next"
            keyboardType="numeric"
            placeholderTextColor="#5697BF"
            placeholder="Digite seu CPF"
          />
          <Input
            Label="Data Nascimento :"
            returnKeyType="next"
            keyboardType="numeric"
            placeholderTextColor="#5697BF"
            placeholder="DD/MM/AAAA"
          />
          <Input
            Label="Senha :"
            returnKeyType="next"
            placeholderTextColor="#5697BF"
            placeholder="Digite sua Senha"
          />
          <Input
            Label="Confirme a senha :"
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