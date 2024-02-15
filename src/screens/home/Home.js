import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {ANDROID_THIME_COLOR, Colors, THEME_COLOR} from '../../utils/colors';
import {scale, verticalScale} from '../../libraries/scaling';
import Performance from '../performance/Performance';
import Students from '../student/Students';
import Academic from '../academic/Academic';
import Attendance from '../attendance/Attendance';
import Result from '../result/Result';
import VectorIcons from '../../utils/VectorIcons';
import Entypo from 'react-native-vector-icons/Entypo';
// import BottomNavigatorComponent from '../../components/bottomnavigator/BottomNavigatorComponent'

const Home = () => {
  const [performance, setPerformance] = useState(0);
  const [student, setStudent] = useState(0);
  const [academic, setAcademic] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [result, setResult] = useState(0);

  const [iconCheck, setIconCheck] = useState(1);
  return (
    <View style={style.container_main}>
      {performance === 1 ? (
        <Performance />
      ) : student === 1 ? (
        <Students />
      ) : academic === 1 ? (
        <Academic />
      ) : attendance === 1 ? (
        <Attendance />
      ) : result === 1 ? (
        <Result />
      ) : (
        <Text>Home</Text>
      )}

      <View style={style.container}>
        <TouchableOpacity
          style={style.icon_container}
          onPress={() => {
            setPerformance(1);
            setStudent(0);
            setAcademic(0);
            setAttendance(0);
            setResult(0);
          }}>
          {iconCheck == 1 ? (
            <Entypo
              // type={'Entypo '}
              name={'bar-graph'}
              size={23}
              color={Colors.TEXT_BLUE}
            />
          ) : (
            <Image
              source={require('../../images/bottom_tab_icons/statistics.png')}
              style={[style.img, {tintColor: NaN}]}
            />
          )}

          <Text
            style={[
              style.text,
              {color: performance == 1 ? THEME_COLOR : '#000'},
            ]}>
            Performance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.icon_container}
          onPress={() => {
            setPerformance(0);
            setStudent(1);
            setAcademic(0);
            setAttendance(0);
            setResult(0);
          }}>
          <Image
            source={require('../../images/bottom_tab_icons/graduates.png')}
            style={[style.img, {tintColor: NaN}]}
          />
          <Text
            style={[style.text, {color: student == 1 ? THEME_COLOR : '#000'}]}>
            Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.icon_container}
          onPress={() => {
            setPerformance(0);
            setStudent(0);
            setAcademic(1);
            setAttendance(0);
            setResult(0);
          }}>
          <Image
            source={require('../../images/bottom_tab_icons/graduated.png')}
            style={[style.img, {tintColor: NaN}]}
          />
          <Text
            style={[style.text, {color: academic == 1 ? THEME_COLOR : '#000'}]}>
            Academic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.icon_container}
          onPress={() => {
            setPerformance(0);
            setStudent(0);
            setAcademic(0);
            setAttendance(1);
            setResult(0);
          }}>
          {}
          <Image
            source={require('../../images/bottom_tab_icons/attendance.png')}
            style={[style.img, {tintColor: NaN}]}
          />
          <Text
            style={[
              style.text,
              {color: attendance === 1 ? THEME_COLOR : '#000'},
            ]}>
            Attendance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.icon_container}
          onPress={() => {
            setPerformance(0);
            setStudent(0);
            setAcademic(0);
            setAttendance(0);
            setResult(1);
          }}>
          <Image
            source={require('../../images/bottom_tab_icons/result.png')}
            style={[style.img, {tintColor: NaN}]}
          />
          <Text
            style={[style.text, {color: result === 1 ? THEME_COLOR : '#000'}]}>
            Result
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container_main: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: verticalScale(100),
    backgroundColor: ANDROID_THIME_COLOR,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    width: scale(35),
    height: scale(35),
  },
  icon_container: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
