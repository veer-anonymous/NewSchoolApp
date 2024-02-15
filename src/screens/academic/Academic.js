import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DivisionCRUD from './inner_academic/DivisionCRUD'
import StandardCRUD from './inner_academic/StandardCRUD'
import SubjectCRUD from './inner_academic/SubjectCRUD'


const Drawer=createDrawerNavigator()
const Academic = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='division crud' component={DivisionCRUD}/>
      <Drawer.Screen name='standard crud' component={StandardCRUD}/>
      <Drawer.Screen name='subject crud' component={ SubjectCRUD}/>
    </Drawer.Navigator>
  )
}

export default Academic