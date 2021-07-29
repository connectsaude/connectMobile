import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: RFPercentage(1),
  },
  content: {
    width: '100%',
    borderRadius: RFPercentage(2),
    height: RFPercentage(60),
  },
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(16),
  },
  titleCenter: {
    alignItems: 'center',
  },
  titleHeaderSolo:{
    fontFamily: theme.fonts.bold,
    justifyContent: 'center',
    color: theme.colors.primary,
  },
  headerSolo: {
    width: "100%",
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
    alignItems: 'center',
    elevation: 4,
    backgroundColor: '#ffffff',
    
  },
  header: {
    width: "100%",
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
    elevation: 4,
    backgroundColor: '#ffffff',
    
  },
  titleHeader: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    fontSize: RFValue(16),
  },
  titleHeader1: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(16),
  },
  contentCard: {
    height: RFPercentage(16),
    width: '100%',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
    elevation: 8,
    backgroundColor: '#ffffff',
    marginTop: RFPercentage(1),
  },
  containerCard:{
    padding: RFPercentage(1),
  },
  name: {
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(16),
  },
  name1: {
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(16),
  }
})