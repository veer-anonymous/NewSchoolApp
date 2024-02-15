import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import MainNavigator from './src/navigation/MainNavigator';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
    //   <View style={styles.loaderContainer}>
    //   <LottieView
    //     style={{width: 200, height: 200}}
    //     // source={require('../lottie/Loader.json')}
    //     source={require('./src/lottie/Loader12.json')}
    //     autoPlay
    //     loop
    //   />
    // </View>
  );
};

export default App;

// const styles=StyleSheet.create({
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 2,
//   },

// })
