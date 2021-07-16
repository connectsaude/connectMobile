import React, { ReactNode } from 'react';
import { 
  View, 
  TextInput, 
  KeyboardTypeOptions,
   ReturnKeyTypeOptions, 
   Text, StyleProp } from 'react-native';

import { styles } from './styles'

type Props = {
  children?: ReactNode;
  secureTextEntry?: boolean;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  returnKeyType?: ReturnKeyTypeOptions;
  Label?: string;
}

export function Input({ 
  children, 
  secureTextEntry,
  returnKeyType,
  keyboardType,
  placeholder,
  Label,
  placeholderTextColor,
   ...props }: Props){
  return(
    <View>
      <Text style={styles.textLabel} >{Label}</Text>
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