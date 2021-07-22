import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
  },
  content: {
    width: '100%',
    marginTop: 0,
  },
  title:{
    textAlign: 'center',
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
  },
  scroll:{
    width: '100%',
    marginTop: 0,
  },
  textLabel:{
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    fontFamily: theme.fonts.bold,
    
  },
  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.heading,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    backgroundColor: theme.colors.primary,
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
  }
})