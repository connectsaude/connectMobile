import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
  },
  content: {
    width: '100%',
    marginTop: 0,
  },
  scroll:{
    width: '100%',
    marginTop: 0,
    
  },
  title:{
    color: theme.colors.primary,
    fontSize: 14,
    marginTop: 5,
    fontFamily: theme.fonts.bold,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})