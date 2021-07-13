import React, { ReactNode } from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles'

type Props = {
  children?: ReactNode;
  secureTextEntry?: boolean;
  placeholder: string;
  placeholderTextColor: string;
}

export function Input({ 
  children, 
  secureTextEntry,
  placeholder,
  placeholderTextColor,
   ...props }: Props){
  return(
    <View>
        <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input} {...props}
        placeholderTextColor={placeholderTextColor}
        >{children}</TextInput>
    </View>
  );
}