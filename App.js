/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
})

const store = createStore(rootReducer);


const App = () => {

  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  );
};



export default App;
