import React, { ReactNode } from 'react';
import { View, TextInput, KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';

import { styles } from './styles'

type Props = {
  children?: ReactNode;
  secureTextEntry?: boolean;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  returnKeyType?: ReturnKeyTypeOptions;

}

export function Input({ 
  children, 
  secureTextEntry,
  returnKeyType,
  keyboardType,
  placeholder,
  placeholderTextColor,
   ...props }: Props){
  return(
    <View>
        <TextInput 
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input} {...props}
        placeholderTextColor={placeholderTextColor}
        >{children}</TextInput>
    </View>
  );
}