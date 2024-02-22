import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddDivision from './inner_divisioncurd/AddDivision';
import EditDivision from './inner_divisioncurd/EditDivision';
import ViewsDivison from './inner_divisioncurd/ViewsDivison';
import MainDivisionCurd from './inner_divisioncurd/MainDivisionCurd';

const Stack = createStackNavigator();
const DivisionCRUD = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="maindivision">
        <Stack.Screen
          name="maindivision"
          component={MainDivisionCurd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="add"
          component={AddDivision}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit"
          component={EditDivision}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="view"
          component={ViewsDivison}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default DivisionCRUD;
