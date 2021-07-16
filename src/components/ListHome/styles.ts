import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  content:{
    backgroundColor: theme.colors.blue200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 116,

  },
  title:{
    color: '#ffffff',
    marginTop: 6,
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
  },
  viewTitle:{
    borderTopColor: '#ffffff',
    borderTopWidth: 1,
    width: '100%',
  }
})