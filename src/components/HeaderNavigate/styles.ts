import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: RFPercentage(11),
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(2),
    borderBottomWidth:1,
    borderBottomColor: theme.colors.primary,
  },
  title:{
    flex: 1,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: RFValue(20),
  },
})