import React from 'react';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { RecoveryPass } from '../screens/RecoveryPass';
import { Home } from '../screens/Home';
import { Schedules } from '../screens/Schedules';
import { CreateSchedules } from '../screens/CreateSchedules';
import { SchedulesLocale } from '../screens/CreateSchedules/SchedulesLocale'
import { CardSusVirtual } from '../screens/CardSUSVirtual'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    ><Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Cartao do SUS"
        component={CardSusVirtual}
      />
      
      
      <Screen
    name="Localização"
    component={SchedulesLocale}
  />
      <Screen
        name="Novo Agendamento"
        component={CreateSchedules}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />

      <Screen
        name="RecoveryPass"
        component={RecoveryPass}
      />

      <Screen
        name="Agendamentos"
        component={Schedules}
      />
      
      
      

    </Navigator>
  );
}