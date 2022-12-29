import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {MD3LightTheme} from 'react-native-paper';
import merge from 'deepmerge';

const defaultTheme = merge(MD3LightTheme, NavigationDefaultTheme);

export default defaultTheme;
