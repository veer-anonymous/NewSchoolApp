import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../../../libraries/scaling';
import {TEXT_BLUE, TEXT_LIGHT} from '../../../../utils/colors';

const ViewsDivison = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.text}>ViewsDivison</Text>

      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={style.button_text}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewsDivison;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    backgroundColor: TEXT_LIGHT,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button_text: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: scale(20),
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
});
