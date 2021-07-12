import React from 'react';
import { View, Text, Image, TextInput }  from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import LogoC  from '../../assets/Logoo.png';
import LogoPrefeitura  from '../../assets/LogoPrefeitura.png';
import LogoPb  from '../../assets/LogoPb.png';
import LogoSus  from '../../assets/LogoSus.png';

import {styles} from './styles';

export function SignIn(){
  return (
    <View  style={styles.container} >
      <Image 
        style={styles.image} 
        source={LogoC}
      />
      <View  style={styles.content}>
        <Text style={styles.texts} >Login :</Text>
        <TextInput 
        style={styles.inputs} 
        placeholder="Digite seu CPF"
        placeholderTextColor="#48B0D9"
        />
        <Text style={styles.texts} >Senha :</Text>
        <TextInput  
        style={styles.inputs} 
        placeholder="Digite sua Senha"
        placeholderTextColor="#48B0D9"
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
        <Image style={styles.img} source={LogoSus} />
        <Image style={styles.img} source={LogoPb} />
        <Image style={styles.img} source={LogoPrefeitura} />
      </View>

    </View>
  )
}