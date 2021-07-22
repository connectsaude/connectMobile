import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    height: RFPercentage(10),
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    padding: RFPercentage(2)
  },
  textLabel:{
    alignItems: 'center',  
  },
  title:{
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(24),
  },
  menu:{
    marginLeft: 0,
  },
  notification:{
    marginRight:  0,
  }
})