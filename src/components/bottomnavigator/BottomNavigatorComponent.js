import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ANDROID_THIME_COLOR, THEME_COLOR} from '../../utils/colors';
import {scale, verticalScale} from '../../libraries/scaling';

const BottomNavigatorComponent = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.icon_container}>
        <Image
          source={require('../../images/bottom_tab_icons/statistics.png')}
          style={[style.img, {tintColor: NaN}]}
        />
        <Text style={style.text}>Performance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.icon_container}>
        <Image
          source={require('../../images/bottom_tab_icons/graduates.png')}
          style={[style.img, {tintColor: NaN}]}
        />
        <Text style={style.text}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.icon_container}>
        <Image
          source={require('../../images/bottom_tab_icons/graduated.png')}
          style={[style.img, {tintColor: NaN}]}
        />
        <Text style={style.text}>Academic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.icon_container}>
        <Image
          source={require('../../images/bottom_tab_icons/attendance.png')}
          style={[style.img, {tintColor: NaN}]}
        />
        <Text style={style.text}>Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.icon_container}>
        <Image
          source={require('../../images/bottom_tab_icons/result.png')}
          style={[style.img, {tintColor: NaN}]}
        />
        <Text style={style.text}>Result</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigatorComponent;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(100),
    backgroundColor: ANDROID_THIME_COLOR,
    position: 'absolute',
    top: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    width: scale(30),
    height: scale(30),
  },
  icon_container: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
