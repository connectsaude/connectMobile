import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: RFPercentage(1),
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFPercentage(2)
  },
  image: {
    height: RFPercentage(41),
    width: '100%',
  },
  cardContent:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: RFPercentage(5),
    marginBottom: RFPercentage(5),
  },
  text:{
    color: theme.colors.heading,
    fontSize: RFValue(17),
    fontFamily: theme.fonts.medium,
  },
  buttonDownlaod:{
    height: 35,
    width: 35,
    backgroundColor: theme.colors.primary,
    borderRadius: 99999,
    alignItems: 'center',
    justifyContent: 'center',
  }
})