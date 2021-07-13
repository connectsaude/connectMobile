import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:10,
    borderBottomWidth:2,
    borderBottomColor: theme.colors.blue200,
  },
  textLabel:{
    alignItems: 'center',  
  },
  title:{
    color: theme.colors.blue100,
    fontFamily: theme.fonts.Poppins700,
    fontSize: 15,
    marginTop: 5,
    marginBottom: -5,
  },
  subTitle:{
    color: theme.colors.blue100,
    fontFamily: theme.fonts.Inter500,
    fontSize: 10,
  },
  menu:{
    marginLeft: 12,
  },
  notification:{
    marginRight:  12,
  }
})