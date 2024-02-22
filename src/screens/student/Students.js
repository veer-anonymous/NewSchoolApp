import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AllStudents from './inner_student/AllStudents';
import EnrolledStudents from './inner_student/EnrolledStudents';
import FormerStudents from './inner_student/FormerStudents';
import ResultMasterStaff from './inner_student/ResultMasterStaff';
import CustomeDrawer from '../../components/customecomponents/CustomeDrawer';

const Drawer = createDrawerNavigator();
const Students = () => {
  return (
    // <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
    <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
      <Drawer.Screen
        name="all students"
        component={AllStudents}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="enrolled students"
        component={EnrolledStudents}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="former students"
        component={FormerStudents}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="restult staff"
        component={ResultMasterStaff}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
};

export default Students;
