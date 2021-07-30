import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFPercentage(2),

  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFPercentage(5),
  },
  textTitle:{
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(20),
  }
})