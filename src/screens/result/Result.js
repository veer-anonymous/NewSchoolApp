import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ResultType from './inner_result/ResultType';
import ResultMasterAdmin from './inner_result/ResultMasterAdmin';
import ResutManager from './inner_result/ResutManager';
import UserCRUD from './inner_result/UserCRUD';
import Designations from './inner_result/Designations';
import CustomeDrawer from '../../components/customecomponents/CustomeDrawer';

const Drawer = createDrawerNavigator();
const Result = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
      <Drawer.Screen
        name="result type"
        component={ResultType}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="result master admin"
        component={ResultMasterAdmin}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="result manager admin"
        component={ResutManager}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="user curd opration"
        component={UserCRUD}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="designation"
        component={Designations}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
};

export default Result;
