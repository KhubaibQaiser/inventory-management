import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  cardContainer: {
    elevation: 2,
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
  mr8: {
    marginRight: 8,
  },
  mr16: {
    marginRight: 16,
  },
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
  },
  textCenter: {
    textAlign: 'center',
  },
  captionText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
