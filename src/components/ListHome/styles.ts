import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content:{
    backgroundColor: theme.colors.blue200,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 20,
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