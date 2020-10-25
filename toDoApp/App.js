// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import {Provider} from 'react-redux'
import Home from './Screens/Home.js'
import { store, persistor } from './Store/store.js';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
      loading={null}
      persistor={persistor}
      >
        <Home/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
