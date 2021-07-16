import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.blue200,
  },
  text:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 15,
    fontFamily: theme.fonts.Poppins500,
    marginBottom: 7,
  },
  icon:{
    marginLeft: 30,
  },
  link:{
    marginRight: 5,
  }
})