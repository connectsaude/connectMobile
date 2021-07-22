import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 60,
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth:1,
    borderBottomColor: theme.colors.blue200,
  },
  title:{
    flex: 1,
    color: theme.colors.blue100,
    fontFamily: theme.fonts.bold,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: RFValue(20),
  },
})