import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ResultType from './inner_result/ResultType';
import ResultMasterAdmin from './inner_result/ResultMasterAdmin';
import ResutManager from './inner_result/ResutManager';
import UserCRUD from './inner_result/UserCRUD';
import Designations from './inner_result/Designations';

const Drawer = createDrawerNavigator();
const Result = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="result type" component={ResultType} />
      <Drawer.Screen name="result master admin" component={ResultMasterAdmin} />
      <Drawer.Screen name="result manager admin" component={ResutManager} />
      <Drawer.Screen name='user curd opration' component={UserCRUD}/>
      <Drawer.Screen name='designation' component={Designations}/>
    </Drawer.Navigator>
  );
};

export default Result;
