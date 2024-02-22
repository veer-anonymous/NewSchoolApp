import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DivisionCRUD from './inner_academic/DivisionCRUD';
import StandardCRUD from './inner_academic/StandardCRUD';
import SubjectCRUD from './inner_academic/SubjectCRUD';
import CustomeDrawer from '../../components/customecomponents/CustomeDrawer';

const Drawer = createDrawerNavigator();
const Academic = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
      <Drawer.Screen
        name="division crud"
        component={DivisionCRUD}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="standard crud"
        component={StandardCRUD}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="subject crud"
        component={SubjectCRUD}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
};

export default Academic;
