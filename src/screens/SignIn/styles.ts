import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFPercentage(2),
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image:{
    width: RFPercentage(20),
    height: RFPercentage(23),
    marginTop: RFPercentage(2),
  },
  content: {
    width: '100%',
    marginTop: RFPercentage(1),
  },
  texts: {
    color: theme.colors.primary,
    fontSize: 14,
    marginTop: 7,
    fontFamily: theme.fonts.bold
  },
  icon:{
    alignItems: 'flex-end',
    color: theme.colors.primary,
    fontSize: 20,
  },
 
  titleButton:{
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
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
  },
  textArea:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 10,
  },
  input:{
    width: '85%',
    height: 45,
    borderRadius: 10,
    paddingLeft: 10,

  },
  iconEye:{
    width: '15%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',

  }
})