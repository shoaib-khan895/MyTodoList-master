import TodoMain from './src/components/TodoMain';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoUpdate from './src/components/TodoUpdate';

const Stack = createNativeStackNavigator();

export default function App() {
  {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            initialRouteName="TodoMain"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="TodoMain" component={TodoMain} />
            <Stack.Screen name="TodoUpdate" component={TodoUpdate} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
