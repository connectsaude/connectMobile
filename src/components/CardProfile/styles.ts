import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  contentProfile:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFPercentage(2),
    padding: RFPercentage(2),
  },
  cardProfile: {
    height: RFPercentage(24),
    width: RFPercentage(55),
    borderRadius: RFPercentage(2),
    elevation: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFPercentage(1),
    flexDirection: 'row',
  },
  contentimage: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: RFPercentage(17),
    height: RFPercentage(17),
    borderRadius: 9999,
  },
  image: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: RFPercentage(17),
    height: RFPercentage(17),
    borderRadius: 9999,
  },
  contentDetails: {
    marginRight: RFPercentage(3),
  },
  textTitle:{
    color: theme.colors.primary,
    fontSize: RFValue(20),
    fontFamily: theme.fonts.bold,
  },
  textDetails:{
    color: theme.colors.primary,
    fontSize: RFValue(16),
    fontFamily: theme.fonts.medium,
  },
})