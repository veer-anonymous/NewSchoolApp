import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../libraries/scaling';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const CustomeDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.container_header}>
        <TouchableOpacity>
          <Image
            source={require('../../images/bottom_tab_icons/user2.png')}
            style={style.img}
          />
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Virendra Majhi</Text>
        </TouchableOpacity>
        <View style={style.header}>
          <TouchableOpacity style={style.button}>
            <Text style={style.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Text style={style.text}>Fogent</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* This is a data section areact */}
      <View style={style.section_area}>
        <TouchableOpacity
          style={style.item_button}
          onPress={() => {
            navigation.navigate('get');
          }}>
          <Text>Get</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.item_button}
          onPress={() => {
            navigation.navigate('set');
          }}>
          <Text>Set</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.item_button}
          onPress={() => {
            navigation.navigate('add');
          }}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomeDrawer;
const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    // position:"absolute",
    // justifyContent: 'center',
    alignItems: 'center',
  },

  container_header: {
    width: '100%',
    height: verticalScale(200),
    // backgroundColor: colors.PRIMARY_DARK,
    backgroundColor: colors.ANDROID_THIME_COLOR,
    // backgroundColor: colors.PRIMARY,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: verticalScale(70),

    // backgroundColor: colors.ANDROID_THIME_COLOR,
    // backgroundColor: colors.PRIMARY,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    // alignItems: 'center'
  },
  img: {
    width: scale(50),
    height: scale(50),
    marginVertical: verticalScale(20),
    alignSelf: 'center',
  },
  button: {
    width: verticalScale(60),
    height: scale(30),
    backgroundColor: colors.TEXT_BLUE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginBottom: scale(10),
  },
  text: {
    fontSize: scale(12),
    fontWeight: 'bold',
    color: 'black',
  },
  section_area: {
    height: '100%',
    width: '100%',
  },
  item_button: {
    marginTop: 10,
    alignSelf: 'center',
  },
});
