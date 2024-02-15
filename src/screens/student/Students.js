import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AllStudents from './inner_student/AllStudents'
import EnrolledStudents from './inner_student/EnrolledStudents'
import FormerStudents from './inner_student/FormerStudents'
import ResultMasterStaff from './inner_student/ResultMasterStaff'

const Drawer=createDrawerNavigator()
const Students = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='all students' component={AllStudents}/>
    <Drawer.Screen name='enrolled students' component={EnrolledStudents}/>
    <Drawer.Screen name='former students' component={FormerStudents}/>
    <Drawer.Screen name='restult staff' component={ResultMasterStaff}/>
    
   </Drawer.Navigator>
  )
}

export default Students