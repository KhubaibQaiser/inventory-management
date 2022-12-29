import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {MD2LightTheme} from 'react-native-paper';
import merge from 'deepmerge';

const defaultTheme = merge(MD2LightTheme, NavigationDefaultTheme);

export default defaultTheme;
