import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles  = StyleSheet.create({
  input: {
      height: RFPercentage(8),
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
      paddingLeft: RFPercentage(2),
      borderWidth: 1,
      borderRadius: RFPercentage(2),
  },
  textLabel:{
    color: theme.colors.primary,
    fontSize: RFValue(16),
    marginTop: RFPercentage(1),
    fontFamily: theme.fonts.bold,
    
  },
})