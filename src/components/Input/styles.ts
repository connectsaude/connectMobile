import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles  = StyleSheet.create({
  input: {
      height: 45,
      marginTop: 5,
      color: theme.colors.blue200,
      borderColor: theme.colors.blue200,
      paddingLeft: 10,
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'space-between'
  }
})