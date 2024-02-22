import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../../../libraries/scaling';

const MainDivisionCurd = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>DivisionCRUD</Text>
      <View style={style.inner_container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('add');
          }}>
          <Text style={[style.button_text, {color: 'blue'}]}>Add </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('edit');
          }}>
          <Text style={[style.button_text, {color: 'purple'}]}>Edit </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('view');
          }}>
          <Text style={[style.button_text, {color: 'green'}]}>Views </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('ok');
          }}>
          <Text style={[style.button_text, {color: 'red'}]}>Delete </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainDivisionCurd;

const style = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  inner_container: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button_text: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
});
