import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFPercentage(5),
  },
  contentInputs:{
    marginTop: RFPercentage(5),
    width: '100%',
    padding: RFPercentage(2),
  },
  contentDate:{
    flexDirection: 'row',
    flex: 1,
    
  },
  date:{
    flex: 1,
  },
  date1:{
    flex: 1,
    marginLeft: RFPercentage(1),
  },
  textTitle:{
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(20),   
  },
  scroll:{
    width: '100%',
    marginTop: 0,
    
  },
  textAreaDate:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: RFPercentage(2),
  },
  inputDate:{
    width: '85%',
    height: RFPercentage(8),
    borderRadius: RFPercentage(2),
    paddingLeft: RFPercentage(2),
    color: theme.colors.primary,

  },
  iconEye:{
    width: '15%',
    height: RFPercentage(8),
    justifyContent: 'center',

  },
  texts: {
    color: theme.colors.primary,
    fontSize: RFValue(16),
    marginTop: 7,
    fontFamily: theme.fonts.bold
  },
  
})