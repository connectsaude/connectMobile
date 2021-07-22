import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content:{
    width: RFPercentage(65),
    paddingLeft: RFPercentage(6),
    paddingRight: RFPercentage(6),
    marginTop: RFPercentage(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  button:{
    paddingHorizontal: 10,
    marginLeft: 7,
    justifyContent: 'space-between',
    paddingVertical: 10,
  }
})