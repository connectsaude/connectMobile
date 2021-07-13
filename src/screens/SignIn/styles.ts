import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
  },
  image:{
    width: 100,
    height: 100,
    marginTop: 10,
  },
  content: {
    width: '100%',
    marginTop: 0,
  },
  texts: {
    color: theme.colors.blue100,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 7,
    fontFamily: theme.fonts.Poppins700
  },
  teste:{
    flex: 1,
   alignContent: 'flex-end'
  },
  icon:{
    alignItems: 'flex-end',
    color: theme.colors.blue200,
    fontSize: 20,
    marginLeft: 50,
  },
 
  titleButton:{
    color: theme.colors.blue200,
    fontFamily: theme.fonts.Inter700,
  },
  contentCad:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  parceiros: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    marginLeft: 20,
    marginTop: 15,
  },
  buttonCadastro:{
    flexDirection: 'row',
    marginTop: 15,
  },
  buttonSenha: {
    marginTop: 10,
  }
})