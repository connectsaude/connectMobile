import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
      backgroundColor: theme.colors.blue200,
      borderRadius: 10,
      width: '100%',
      fontFamily: theme.fonts.Inter700,
      color: '#ffffff',
      marginTop: 25,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontFamily: theme.fonts.Inter700,
    fontSize: 18,
  }
})