import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {MD2LightTheme as RNPaperTheme} from 'react-native-paper';
import merge from 'deepmerge';

const defaultTheme = merge(RNPaperTheme, NavigationDefaultTheme);

export default defaultTheme;
