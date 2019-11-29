import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import Font from '../assets/Font';

const Update = ({button, title, subtitle,progressBar}) => {
    const{viewStyle}=Container
  return (
    <View style={viewStyle}>
        <TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={{paddingLeft:10}}>{button}</Text>
        <View style={{marginLeft:10}}>
          <Text style={{fontFamily:Font.boldSans,fontSize:20}}>{title}</Text>
          <Text style={{fontFamily:Font.lightSans,fontSize:15}}>{subtitle}</Text>
        </View>
      </View>
      <View style={{paddingLeft:10,paddingTop:10}}>
          {progressBar}
      </View>
      </TouchableOpacity>
   
    </View>
  );
};

export default Update;
const Container=StyleSheet.create({
    viewStyle:{
        backgroundColor:'#6a5acd',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        height:80
        
        }
})