import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GenerateAttendence from './inner_attendance/GenerateAttendence';
import StudentAttendance from './inner_attendance/StudentAttendance';
import ViewAttendence from './inner_attendance/ViewAttendence';
import CustomeDrawer from '../../components/customecomponents/CustomeDrawer';

const Drawer = createDrawerNavigator();
const Attendance = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props} />}>
      <Drawer.Screen
        name="generate attendence"
        component={GenerateAttendence}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="student attendence"
        component={StudentAttendance}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="view attendence"
        component={ViewAttendence}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
};

export default Attendance;
