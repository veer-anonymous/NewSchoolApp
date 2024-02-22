import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SceenGet from './inner_gets/SceenGet';
import SceenAdd from './inner_gets/SceenAdd';
import ScreenSet from './inner_gets/ScreenSet';

const Stack = createStackNavigator();
const Gets = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="get"
        component={SceenGet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="add"
        component={SceenAdd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="set"
        component={ScreenSet}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Gets;
