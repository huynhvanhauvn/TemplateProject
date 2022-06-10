/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import i18next from './src/shared/language';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './src/rootRedux/store';
import AppNavigator from 'navigators';

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
