import React from 'react';
import 'react-native-gesture-handler';
import RootNavigator from './src/app/constants/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StateProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import defaultTheme from './src/app/styles/theme';
import store from './src/data/store';

const App = () => {
  return (
    <StateProvider store={store}>
      <PaperProvider theme={defaultTheme}>
        <NavigationContainer theme={defaultTheme}>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StateProvider>
  );
};

export default App;
