import React, { ReactNode } from 'react';
import { 
  View, 
  TextInput, 
  KeyboardTypeOptions,
   ReturnKeyTypeOptions, 
   Text } from 'react-native';

import { styles } from './styles'

type Props = {
  children?: ReactNode;
  secureTextEntry?: boolean;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  returnKeyType?: ReturnKeyTypeOptions;
  Label?: string;
  value?: string;
  multiline?: boolean;
}

export function Input({ 
  children, 
  secureTextEntry,
  returnKeyType,
  keyboardType,
  placeholder,
  Label,
  multiline,
  value,
  placeholderTextColor,
   ...props }: Props){
  return(
    <View>
      <Text style={styles.textLabel} >{Label}</Text>
        <TextInput 
        value={value}
        keyboardType={keyboardType}
        multiline={multiline}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input} {...props}
        placeholderTextColor={placeholderTextColor}
        >{children}</TextInput>
    </View>
  );
}