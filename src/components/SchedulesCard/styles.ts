import { StyleSheet } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: RFPercentage(18),
    width: RFPercentage(55),
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
    elevation: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  content:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentDetails:{
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDate:{
    fontFamily: theme.fonts.regular,
  },
  textTitle:{
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(25),
  }
})