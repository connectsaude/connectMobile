import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import LogoC from '../../assets/LogoCC.svg';
import LogoPrefeitura from '../../assets/LogoPrefeitura.png';
import LogoPb from '../../assets/LogoPb.png';
import LogoSus from '../../assets/LogoSus.png';

import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

type Props = React.FC<SvgProps>;

export function SignIn() {
  return (
    <View style={styles.container} >
      <Image
        style={styles.image}
        source={LogoC}
      />

      <View style={styles.content}>
        <Text style={styles.texts} >Login :</Text>
        <Input>Digite seu CPF</Input>
        <Text style={styles.texts} >Senha :</Text>

        <Input>
          Digite sua senha
          <Entypo name="eye-with-line" size={20} color="#5697BF" />
        </Input>
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