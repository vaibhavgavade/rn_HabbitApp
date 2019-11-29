import React from 'react';
import {View, StyleSheet} from 'react-native';
const Card = props => {
  const {CardViewStyle} = Container;
  return <View style={CardViewStyle}>{props.children}</View>;
};
export default Card;
const Container = StyleSheet.create({
  CardViewStyle: {
    backgroundColor: '#32cd32',
    borderRadius: 10,
    marginEnd: 20,
    marginLeft: 10,
    marginTop: 20,
    height: 120,
    width: 100,
  },
});
