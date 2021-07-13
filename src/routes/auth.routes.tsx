import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { RecoveryPass } from '../screens/RecoveryPass';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){

  return(
    <Navigator 
    headerMode="none"screenOptions={{
      cardStyle: {
        backgroundColor: 'transparent'
      }
    }}
    >
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

    </Navigator>
  );
}