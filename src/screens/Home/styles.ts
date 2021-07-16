import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  content:{
    backgroundColor: theme.colors.blue200,
    borderRadius: 10,
  },
  welcome: {
    backgroundColor: theme.colors.blue200,
    height: 60,
    margin: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWel:{
    color: '#ffffff',
    fontSize: 13,
    fontFamily: theme.fonts.Poppins700,
  },
  teste:{
    paddingHorizontal: 10,
    marginLeft: 7,
    justifyContent: 'space-between',
    paddingVertical: 10,
  }
})