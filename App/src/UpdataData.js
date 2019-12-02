import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {ActionData} from '../Redux/action/ActionData';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Font from '../assets/Font';
const UpdateData = ({ActionData}) => {
  const [data, ChangeData] = useState('');
  const [Idata, changeIdata] = useState('');
  const [progessData, changeProgress] = useState();
  const [update, updateData] = useState([]);

  useEffect(() => {
    if (update.length) {
      ActionData(update);
    }
  });
  const updateUserData = text => {
    ChangeData(text);
  };

  const updateTextData = text => {
    changeIdata(text);
  };

  const updateProgrss = text => {
    let newText = '';
    let numbers = '0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert('please enter numbers only');
      }
    }
    changeProgress(newText);
  };
  const updateViewData = () => {
    console.log('Test Update', update);
    updateData([data, Idata, progessData]);
  };

  const {viewStyle, textInput, textStyle} = Container;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Enter your Habbit </Text>
      <TextInput
        style={textInput}
        onChangeText={updateUserData}
        value={data}
        placeholder="Enter your Data"
        multiline={true}
      />
      <Text style={textStyle}>Enter Your weekly Data</Text>
      <TextInput
        style={textInput}
        onChangeText={updateTextData}
        value={Idata}
        placeholder="Enter your weeklyData"
        multiline={true}
      />
      <Text style={textStyle}>Enter your progress</Text>
      <TextInput
        style={textInput}
        onChangeText={updateProgrss}
        value={progessData}
        placeholder="Your Progress"
        multiline={true}
        keyboardType={'numeric'}
        maxLength={9}
        returnKeyType="go"
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          height: 41,
          width: 300,
          borderRadius: 10,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 40,
        }}
        onPress={() => updateViewData()}>
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: Font.boldSans,
            fontSize: 20,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, {ActionData})(UpdateData);
const Container = StyleSheet.create({
  viewStyle: {
    margin: 10,
  },
  textInput: {
    height: 41,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#008000',
    marginTop: 3,
    fontFamily: Font.regularSans,
    fontSize: 15,
  },
  textStyle: {
    marginTop: 8,
    fontFamily: Font.boldSans,
    fontSize: 20,
  },
});
