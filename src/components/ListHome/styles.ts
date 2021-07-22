import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  content:{
    backgroundColor: theme.colors.primary,
    borderRadius: RFPercentage(2),
    alignItems: 'center',
    justifyContent: 'center',
    width: RFPercentage(18),
    height: RFPercentage(23),

  },
  title:{
    color: '#ffffff',
    marginTop: 6,
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
  },
  viewTitle:{
    borderTopColor: '#ffffff',
    borderTopWidth: 1,
    width: '100%',
  }
})