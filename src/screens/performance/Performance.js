import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Gets from './inner_performance/Gets';
import Sets from './inner_performance/Sets';
import Adds from './inner_performance/Adds';
import CustomeDrawer from '../../components/customecomponents/CustomeDrawer';
import BottomNavigatorComponent from '../../components/bottomnavigator/BottomNavigatorComponent';

const Drawer = createDrawerNavigator();
const Performance = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
      {/* <Drawer.Navigator> */}
      <Drawer.Screen
        name="get"
        component={Gets}
        options={{headerShown: false}}
      />

      {/* <Drawer.Screen name="set" component={Sets} />
      <Drawer.Screen name="add" component={Adds} /> */}
    </Drawer.Navigator>
  );
};

export default Performance;
