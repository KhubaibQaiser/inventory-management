import {StyleSheet} from 'react-native';
import {MD2Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  title: {
    flex: 0.7,
  },
  type: {
    flex: 0.3,
    marginTop: 4,
    height: '92%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeText: {
    fontSize: 14,
    color: MD2Colors.blue600,
    fontWeight: '400',
  },
});
