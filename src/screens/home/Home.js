import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {scale, verticalScale} from '../../libraries/scaling';
import Performance from '../performance/Performance';
import Students from '../student/Students';
import Academic from '../academic/Academic';
import Attendance from '../attendance/Attendance';
import Result from '../result/Result';
import VectorIcons from '../../utils/VectorIcons';
import {useNavigation} from '@react-navigation/native';
import CommonDrawer from '../../components/common/CommonDrawer';
import {DrawerActions} from '@react-navigation/native';

const Home = () => {
  const [performance, setPerformance] = useState(0);
  const [student, setStudent] = useState(0);
  const [academic, setAcademic] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [result, setResult] = useState(0);
  const [iconshow, setIconshow] = useState(false);
  const navigation = useNavigation();
  const [opendrawer, setOpendrawer] = useState(false);
  return (
    <View style={style.container_main}>
      <CommonDrawer
        onClickLeft={() => {
          if (opendrawer) {
            navigation.dispatch(DrawerActions.closeDrawer());
          } else {
            navigation.dispatch(DrawerActions.openDrawer());
          }
          setOpendrawer(!opendrawer);
        }}
        items={{performance, student, academic, attendance}}
      />
      {performance == 1 ? (
        <Performance />
      ) : student == 1 ? (
        <Students />
      ) : academic == 1 ? (
        <Academic />
      ) : attendance == 1 ? (
        <Attendance />
      ) : (
        <Result />
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
          {iconshow == true ? (
            <VectorIcons
              name="bar-graph"
              type="Entypo"
              color={performance == 1 ? colors.PRIMARY : '#000'}
              size={performance == 1 ? 30 : 20}
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
              {
                color: performance == 1 ? colors.PRIMARY : '#000',
                fontSize: performance == 1 ? 16 : 13,
              },
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
          {iconshow == true ? (
            <VectorIcons
              name="user-graduate"
              type="FontAwesome5"
              color={student == 1 ? colors.PRIMARY : '#000'}
              size={student == 1 ? 30 : 20}
            />
          ) : (
            <Image
              source={require('../../images/bottom_tab_icons/graduates.png')}
              style={[style.img, {tintColor: NaN}]}
            />
          )}

          <Text
            style={[
              style.text,
              {
                color: student == 1 ? colors.PRIMARY : '#000',
                fontSize: student == 1 ? 16 : 13,
              },
            ]}>
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
          {iconshow == true ? (
            <VectorIcons
              name="school"
              type="FontAwesome5"
              color={academic == 1 ? colors.PRIMARY : '#000'}
              size={academic == 1 ? 30 : 20}
            />
          ) : (
            <Image
              source={require('../../images/bottom_tab_icons/graduated.png')}
              style={[style.img, {tintColor: NaN}]}
            />
          )}

          <Text
            style={[
              style.text,
              {
                color: academic == 1 ? colors.PRIMARY : '#000',
                fontSize: academic == 1 ? 16 : 13,
              },
            ]}>
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
          {iconshow == true ? (
            <VectorIcons
              name="calendar-check"
              type="FontAwesome5"
              color={attendance == 1 ? colors.PRIMARY : '#000'}
              size={attendance == 1 ? 30 : 20}
            />
          ) : (
            <Image
              source={require('../../images/bottom_tab_icons/attendance.png')}
              style={[style.img, {tintColor: NaN}]}
            />
          )}

          <Text
            style={[
              style.text,
              {
                color: attendance == 1 ? colors.PRIMARY : '#000',
                fontSize: attendance == 1 ? 16 : 13,
              },
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
          {iconshow == true ? (
            <VectorIcons
              name="solution1"
              type="AntDesign"
              color={result == 1 ? colors.PRIMARY : '#000'}
              size={result == 1 ? 30 : 25}
            />
          ) : (
            <Image
              source={require('../../images/bottom_tab_icons/result.png')}
              style={[style.img, {tintColor: NaN}]}
            />
          )}

          <Text
            style={[
              style.text,
              {
                color: result == 1 ? colors.PRIMARY : '#000',
                fontSize: result == 1 ? 16 : 13,
              },
            ]}>
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
    height: verticalScale(70),
    backgroundColor: colors.ANDROID_THIME_COLOR,
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
    fontSize: scale(13),
    fontWeight: '500',
  },
});
