import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text } from 'react-native';
import { styles } from './styles';


type ButtonProps = RectButtonProps & {
  children: ReactNode;
  onPress?: () =>  void;
}

export function Button({ children, onPress,...props }: ButtonProps) {
  return (
    <RectButton 
    style={styles.container}
    onPress={onPress}
     {...props} >
      <Text style={styles.title}>{children}</Text>
    </RectButton>
  )
}