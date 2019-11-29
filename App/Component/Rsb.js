import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Font from '../assets/Font';
const Rsb = ({one, two, three}) => {
  const {viewStyle,textStyle} = Container;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{one}</Text>
      <Text style={textStyle}>{two}</Text>
      <Text style={textStyle}>{three}</Text>
    </View>
  );
};

export default Rsb;
const Container = StyleSheet.create({
  viewStyle: {
    margin:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: Font.boldSans,
  },
});
