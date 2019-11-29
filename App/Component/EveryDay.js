import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Font from '../assets/Font';
const EveryDay = ({one, two, three}) => {
  const {viewStyle, textStyle} = Container;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{one}</Text>
      <Text style={textStyle}>{two}</Text>
      <Text style={textStyle}>{three}</Text>
    </View>
  );
};

export default EveryDay;
const Container = StyleSheet.create({
  viewStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 15,
    fontFamily: Font.lightSans,
  },
});
