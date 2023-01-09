import React from 'react';
import 'react-native-gesture-handler';
import RootNavigator from './src/app/constants/navigation/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StateProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import defaultTheme from './src/app/styles/theme';
import store, {persistor} from './src/data/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <StateProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={defaultTheme}>
          <NavigationContainer theme={defaultTheme}>
            <RootNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StateProvider>
  );
};

export default App;
