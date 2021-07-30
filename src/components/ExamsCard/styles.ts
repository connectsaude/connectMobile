import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: RFPercentage(30),
    width: RFPercentage(57),
    borderRadius: RFPercentage(2),
    padding: RFPercentage(1),
    elevation: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  content:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  contentDetails:{
    width: '100%',
    justifyContent: 'space-between',

  },
  contentTitle:{
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDate:{
    fontFamily: theme.fonts.regular,
  },
  textExams:{
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(22),
  },
  textProcedures:{
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(19),
  }
})