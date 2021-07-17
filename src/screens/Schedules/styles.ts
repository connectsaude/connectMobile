import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.blue200,
  },
  title:{
    color: theme.colors.blue100,
    marginLeft: 50,
    fontSize: 14,
    marginTop: 5,
    fontFamily: theme.fonts.Poppins700,
  },
  titleList:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.blue200,
  },
  textList:{
    marginLeft: 10,
    paddingHorizontal: 28,
    marginBottom:5,
    fontSize: 14,
    fontFamily: theme.fonts.Inter500,
    color: theme.colors.blue200,
  },
  containerModal:{
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth:1,
    borderBottomColor: theme.colors.blue200,
  },
  titleModal:{
    flex: 1,
    color: theme.colors.blue100,
    fontFamily: theme.fonts.Poppins700,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    marginBottom: -5,
  },
  contentModal:{
    padding: 20,
  },
  textModal:{
    fontFamily: theme.fonts.Inter700,
    color: theme.colors.blue200,
  },
  textAgend:{
    fontFamily: theme.fonts.Inter500,
    color: '#000000',
  },
  button:{
    padding: 10,
  },
  buttonModal:{
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: theme.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#ffffff',
    fontFamily: theme.fonts.Inter700,
  },
  img:{
    width: '100%',
  },
  img2:{
   width: '100%',
  }
})