import React, { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LogoPP from '../../assets/LogoPP.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles'

export function RecoveryPass() {

  const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation();

  return (
    <View style={styles.container} >
      <LogoPP />
      <Text style={styles.title} >
        Iremos auxiliar você a recuperar sua senha !
      </Text>
      <View style={styles.content} >
        <Input
          placeholderTextColor="#5697BF"
          placeholder="Digite seu CPF ou email"
        />
        <Button onPress={() => setModalVisible(!modalVisible)} >
          Enviar
        </Button>

      </View>

      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.contentModal}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Foi enviado um email com a redefinição da senha.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>

  );
}