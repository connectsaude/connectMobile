import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import LogoC from '../../assets/LogoCC.svg';
import LogoPrefeitura from '../../assets/LogoPre.svg';
import LogoPb from '../../assets/LogoPB.svg';
import LogoSus from '../../assets/LogoSUS.svg';

import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container} >
      <LogoC style={styles.image}/>

      <View style={styles.content}>
        <Text style={styles.texts} >Login :</Text>
        <Input 
        placeholderTextColor="#5697BF"
        placeholder="Digite seu CPF"
        />
        <Text style={styles.texts} >Senha :</Text>

        <Input 
        secureTextEntry={true}
        placeholderTextColor="#5697BF"
        placeholder="Digite sua senha"
        />
      </View>
      <Button>
        Entrar
      </Button>

      <View style={styles.contentCad} >

        <RectButton style={styles.buttonCadastro} >
          <AntDesign
            name="adduser"
            color="#5697BF"
            size={20}
          />
          <Text style={styles.titleButton} >Cadastra-se</Text>
        </RectButton>
        <RectButton style={styles.buttonSenha} >
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