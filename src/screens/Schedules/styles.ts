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
  }
})