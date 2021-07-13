import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';



type Props = RectButtonProps & {
  title: string,
  icon: React.FC<SvgProps>;
}

export function ListHome({
  title,
  icon: Icon,
  ...props
}: Props) {


  return (
    <RectButton {...props} >
      <View style={styles.container}>
      <View style={styles.content} >
        <Icon width={75} height={75} color="#0B80C8" />
        <View style={styles.viewTitle} >
        <Text style={styles.title} >{title}</Text>
        </View>
      </View>
      </View>
    </RectButton >
  );
}