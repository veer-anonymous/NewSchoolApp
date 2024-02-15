import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Gets from './inner_performance/Gets'
import Sets from './inner_performance/Sets'
import Adds from './inner_performance/Adds'

const Drawer=createDrawerNavigator()
const Performance = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='get' component={Gets}/>
      <Drawer.Screen name='set' component={Sets}/>
      <Drawer.Screen name='add' component={Adds}/>
    </Drawer.Navigator>
  )
}

export default Performance