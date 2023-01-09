import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {MD2LightTheme as RNPaperTheme, MD2Colors} from 'react-native-paper';
import merge from 'deepmerge';

const defaultTheme = merge(RNPaperTheme, NavigationDefaultTheme);

export {MD2Colors as ThemeColors};

export default defaultTheme;
