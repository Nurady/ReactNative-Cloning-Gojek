import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, NewsDetail, NewsDetail2} from '../containers';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetail2"
        component={NewsDetail2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
