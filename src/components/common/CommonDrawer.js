import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const CommonDrawer = ({onClickLeft, items}) => {
  const navigation = useNavigation();
  const {performance, student, academic, attendance} = items;
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: colors.PRIMARY,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {performance == 1 ? (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Performance</Text>
      ) : student == 1 ? (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Student</Text>
      ) : academic == 1 ? (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Academic</Text>
      ) : attendance == 1 ? (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Attendance</Text>
      ) : (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Result</Text>
      )}
      <TouchableOpacity
        onPress={() => {
          onClickLeft();
        }}>
        {performance == 1 ? (
          <Image
            source={require('../../../src/images/bottom_tab_icons/statistics.png')}
            style={{width: 30, height: 30}}
          />
        ) : student == 1 ? (
          <Image
            source={require('../../../src/images/bottom_tab_icons/graduates.png')}
            style={{width: 30, height: 30}}
          />
        ) : academic == 1 ? (
          <Image
            source={require('../../../src/images/bottom_tab_icons/graduated.png')}
            style={{width: 30, height: 30}}
          />
        ) : attendance == 1 ? (
          <Image
            source={require('../../../src/images/bottom_tab_icons/attendance.png')}
            style={{width: 30, height: 30}}
          />
        ) : (
          <Image
            source={require('../../../src/images/bottom_tab_icons/result.png')}
            style={{width: 30, height: 30}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CommonDrawer;
