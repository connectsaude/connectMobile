import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text} from 'react-native';
import { styles } from './styles';


type ButtonProps = RectButtonProps & {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...props} >
      <Text style={styles.title}>{children}</Text>
    </RectButton>
  )
}