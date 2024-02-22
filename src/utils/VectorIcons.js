import {View, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';

const VectorIcons = props => {
  const {name, size, color, type, onPress, style} = props;
  return (
    <View style={style}>
      {type == 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      ) : type == 'MaterialIcons' ? (
        <MaterialIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      ) : type == 'FontAwesome' ? (
        <FontAwesome onPress={onPress} size={size} name={name} color={color} />
      ) : type == 'FontAwesome5' ? (
        <FontAwesome5 name={name} size={size} color={color} onPress={onPress} />
      ) : type == 'Feather' ? (
        <Feather name={name} size={size} color={color} onPress={onPress} />
      ) : type == 'AntDesign' ? (
        <AntDesign name={name} size={size} onPress={onPress} color={color} />
      ) : type == 'Entypo' ? (
        <Entypo name={name} onPress={onPress} color={color} size={size} />
      ) : type == 'Ionicons' ? (
        <Ionicons name={name} onPress={onPress} color={color} size={size} />
      ) : type == 'EvilIcons' ? (
        <EvilIcons name={name} onPress={onPress} color={color} size={size} />
      ) : (
        <Octicons name={name} size={size} color={color} onPress={onPress} />
      )}
    </View>
  );
};

export default VectorIcons;
