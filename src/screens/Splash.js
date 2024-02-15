import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Appearance,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfo} from '../store/userSlice';
import {useDispatch} from 'react-redux';
import {ANDROID_THIME_COLOR, THEME_COLOR} from '../utils/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from '../libraries/scaling';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../libraries/scalingr';
import LottieView from 'lottie-react-native';

const {height} = Dimensions.get('window');
const Splash = () => {
  const navigation = useNavigation();
  const [barStyle, setBarStyle] = useState('light-content');
  const [barColor, setBarColor] = useState(THEME_COLOR);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (Appearance.getColorScheme() === 'dark') {
        setBarStyle('light-content');
      }
      if (Appearance.getColorScheme() === 'light') {
        setBarStyle('default');
      }

      if (Platform.OS === 'android') {
        setBarColor('#757575');
        // setBarStyle('default');
        if (Appearance.getColorScheme() === 'dark') {
          setBarStyle('light-content');
        }
        if (Appearance.getColorScheme() === 'light') {
          setBarStyle('default');
        }
      }
      const checkToken = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            // console.log('Token ', token);
            dispatch(getUserInfo())
              .then(action => {})
              .catch(error => {});
            navigation.navigate('Home');
          } else {
            navigation.navigate('Login');
          }
        } catch (error) {
          console.error('Error reading token from AsyncStorage:', error);
          navigation.navigate('Login');
        }
      };

      checkToken();
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS != 'android' ? (
        <StatusBar backgroundColor={barColor} barStyle={barStyle} />
      ) : (
        <StatusBar backgroundColor={ANDROID_THIME_COLOR} barStyle={barStyle} />
      )}
      {/* {Platform.OS === 'android' && (
        <StatusBar backgroundColor={barColor} barStyle={barStyle} />
      )} */}
      {/*{Platform.OS === 'ios' && <StatusBar barStyle={barStyle} />}*/}
      {/*<Image*/}
      {/*  source={require('../images/nlogo4.png')}*/}
      {/*  style={styles.logo}*/}
      {/*  resizeMode={'contain'}*/}
      {/*/>*/}
      <LottieView
        style={styles.logo}
        source={require('../lottie/School2.json')}
        autoPlay
        loop
      />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>School</Text>
        <Text style={styles.text}>Management System</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: THEME_COLOR,
    backgroundColor: '#124559',
  },
  text: {
    color: '#ff9f1c',
    fontFamily: 'Cabin-BoldItalic',
    fontSize: height > 667 ? 40 : 30,
    // fontWeight: '900',
  },

  logo: {
    height: verticalScale(450),
    width: '90%',
    marginTop: hp('4%'),
    alignSelf: 'center',
    // marginBottom: moderateVerticalScale(5),
  },
});

export default Splash;
