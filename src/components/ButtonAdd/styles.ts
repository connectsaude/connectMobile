import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    backgroundColor: theme.colors.blue200,
    borderRadius: 99999,
    alignItems: 'center',
    justifyContent: 'center',
  }
})