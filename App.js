import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import ScanScreen from './Screens/ScanScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {

  render() { 

    return (

      <SafeAreaProvider>
      <View>
        <AppContainer/>
      </View>
      </SafeAreaProvider>

    );

  }

}

var AppNavigator = createSwitchNavigator({

  ScanScreen:ScanScreen
  
});

const AppContainer = createAppContainer(AppNavigator);