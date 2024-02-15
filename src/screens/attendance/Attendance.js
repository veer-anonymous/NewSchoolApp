import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import GenerateAttendence from './inner_attendance/GenerateAttendence'
import StudentAttendance from './inner_attendance/StudentAttendance'
import ViewAttendence from './inner_attendance/ViewAttendence'

const Drawer=createDrawerNavigator()
const Attendance = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='generate attendence' component={GenerateAttendence}/>
      <Drawer.Screen name='student attendence' component={StudentAttendance}/>
      <Drawer.Screen name='view attendence' component={ViewAttendence}/>
    </Drawer.Navigator>
  )
}

export default Attendance