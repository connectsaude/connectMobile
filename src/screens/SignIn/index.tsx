import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


import LogoC from '../../assets/LogoCC.svg';
import LogoPrefeitura from '../../assets/LogoPre.svg';
import LogoPb from '../../assets/LogoPB.svg';
import LogoSus from '../../assets/LogoSUS.svg';

import { styles } from './styles';

export function SignIn() {

  const navigator = useNavigation();
  const [hidePass, setHidePass] = useState(true);

  function handleSignUp() {
    navigator.navigate('SignUp');
  }

  function handleSignIn() {
    navigator.navigate('Home')
  }

  function handleRecoveryPass() {
    navigator.navigate('RecoveryPass');
  }
  return (
    <View style={styles.container} >
      <LogoC style={styles.image} />

      <View style={styles.content}>
        <Input
          Label="Login :"
          placeholderTextColor="#5697BF"
          placeholder="Digite seu CPF"
        />

        <Text style={styles.texts} >Senha :</Text>
        <View style={styles.textArea} >
          <TextInput
            style={styles.input}
            secureTextEntry={hidePass}
            placeholderTextColor="#5697BF"
            placeholder="Digite sua senha"
          />
          <TouchableOpacity
            onPress={() => setHidePass(!hidePass)}
            style={styles.iconEye} >
            {hidePass ?
              <Ionicons name="eye" size={24} color="#2a65c8" />
              :
              <Ionicons name="eye-off" size={24} color="#2a65c8" />
            }

          </TouchableOpacity>

        </View>

      </View>
      <Button onPress={() => handleSignIn()}>
        Entrar
      </Button>

      <View style={styles.contentCad} >

        <RectButton onPress={() => handleSignUp()} style={styles.buttonCadastro} >
          <AntDesign
            name="adduser"
            color="#2a65c8"
            size={20}
          />
          <Text style={styles.titleButton} >Cadastra-se</Text>
        </RectButton>
        <RectButton
          onPress={() => handleRecoveryPass()}
          style={styles.buttonSenha} >
          <Text style={styles.titleButton} >Esqueceu a senha ?</Text>
        </RectButton>
      </View>


      <View style={styles.parceiros} >
        <LogoSus style={styles.img} />
        <LogoPb style={styles.img} />
        <LogoPrefeitura style={styles.img} />
      </View>

    </View>
  )
}