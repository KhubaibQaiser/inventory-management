import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: ThemeColors.grey600,
  },
  typeText: {
    fontSize: 14,
    color: ThemeColors.blue600,
    fontWeight: '400',
    textAlign: 'center',
  },
});
