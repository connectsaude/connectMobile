import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  LogBox,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Button } from '../../components/Button';
import DatePiker from '@react-native-community/datetimepicker';
import { HeaderNavigate } from '../../components/HeaderNavigate';
import { Input } from '../../components/Input';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

export function CreateSchedules() {

  const navigator = useNavigation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('');
  const [hours, setHours] = useState('');
  const [expanded, setExpended] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  function onChange(event: Event, selectedDate: Date) {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fHora = tempDate.getHours() + ':' + tempDate.getMinutes();
    setDateText(fDate);
    setHours(fHora);
    console.log(fDate)
  };

  function handleInput(datetext: string) {
    setDateText(datetext)
  }

  function showMode(currentDate: string) {
    setShow(true);
    setMode(currentDate);
  }

  function showDatepicker() {
    showMode('date');
  };

  function showTimepicker() {
    showMode('time');
  };

  function handleExpend() {
    setExpended(!expanded);
  }

  function handleNext() {
    navigator.navigate('Localização');
  }

  return (
    <>
      <View>
        <HeaderNavigate
          title="Novo Agendamento"
        />
      </View>
      <View style={styles.content} >
        <Text style={styles.textTitle}>Vamos realizar um novo Agendamento</Text>
      </View>
      <View style={styles.container}>
        <ScrollView
          nestedScrollEnabled
          indicatorStyle='white'
          style={styles.scroll} >
          <View style={styles.contentInputs} >
            <Input
              Label="Tipo do Exame :"
              returnKeyType="next"
              placeholderTextColor="#5697BF"
              placeholder="Digite o Tipo do Exame"
            />
            <View style={styles.contentDate}>
              <View style={styles.date} >
                <Text style={styles.texts} >Data :</Text>
                <View style={styles.textAreaDate} >

                  <TextInput
                    style={styles.inputDate}
                    placeholder="DD/MM/AAAA"
                    returnKeyType="next"
                    placeholderTextColor="#5697BF"
                    onChange={(event) => handleInput(event.target.value)}
                    value={dateText}

                  />
                  <TouchableOpacity
                    onPress={showDatepicker}
                    style={styles.iconEye} >
                    <Ionicons name="md-calendar-sharp" size={24} color="#2a65c8" />
                  </TouchableOpacity>

                </View>
              </View>
              <View style={styles.date1} >

                <Text style={styles.texts} >Data :</Text>
                <View style={styles.textAreaDate} >

                  <TextInput
                    style={styles.inputDate}
                    placeholder="HH:MM"
                    returnKeyType="next"
                    placeholderTextColor="#5697BF"
                    value={hours}

                  />
                  <TouchableOpacity
                    onPress={showTimepicker}
                    style={styles.iconEye} >
                    <MaterialIcons name="watch-later" size={24} color="#2a65c8" />
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            <View>
              <Input
                Label="Descrição :"
                returnKeyType="next"
                multiline={true}
                placeholderTextColor="#5697BF"
                placeholder="Escreva uma breve descrição"
              />
            </View>
            {show && (
              <DatePiker
                testID="DateTimePicker"
                value={date}
                mode={mode}
                minuteInterval={20}
                minimumDate={new Date()}
                display="spinner"
                onChange={onChange}
              />
            )}
            <Button onPress={handleNext}>
              Prosseguir
            </Button>

          </View>
        </ScrollView>
      </View>
    </>
  )
}