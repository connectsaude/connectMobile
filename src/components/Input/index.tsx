import React, { ReactNode, cloneElement, ReactElement } from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles'

type Props = {
  children: ReactElement;
}

export function Input({ children, ...props }: Props){
  return(
    <View>
        <TextInput style={styles.input} {...props}
        >{cloneElement( children ,{ ...props })}</TextInput>
    </View>
  );
}