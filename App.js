import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigations/Route';
import FlashMessage from "react-native-flash-message";
import TabRoutes from './src/navigations/TabRoutes';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App = () => {
  return (

    <Provider store={store}>
      <Routes />
      {/* <TabRoutes /> */}
      <FlashMessage
        position="top"
      />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
