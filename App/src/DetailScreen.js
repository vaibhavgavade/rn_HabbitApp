import React from 'react';
import {Text, View, StyleSheet, Image,} from 'react-native';
import {Images} from '../Constant/Images';
import Font from '../assets/Font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import EveryDay from '../Component/EveryDay';
import LineChart from '../Component/LineChart';
import Rsb from '../Component/Rsb';


const DetailScreen = () => {
  const {viewStyle} = Container;

  return (
    <View style={viewStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={{fontFamily: Font.boldSans, fontSize: 25}}>
          Learn five new Words
        </Text>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30, marginLeft: 50}}
            source={Images.EditCircle}
          />
        </TouchableOpacity>
      </View>

      <View style={{margin: 20}}>
        <Text style={{fontFamily: Font.regularSans, fontSize: 20}}>
          Five from this week
        </Text>
        <Progress.Bar
          style={{marginTop: 10, width: 300}}
          progress={0.9}
          color="#c71585"
        />
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 20}}>strength</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 40, fontFamily: Font.boldSans}}>73%</Text>
          <Progress.Circle
            size={50}
            progress={0.6}
            showsText={true}
            strokeCap={'butt'}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 5,
        }}
      />
      <Rsb one="Repeat" two="streak" three="Best" />
      <EveryDay one="Every Day" two="8 Day " three="11 Days" />
      <LineChart />
    </View>
  );
};

export default DetailScreen;

const Container = StyleSheet.create({
  viewStyle: {
    // margin: 20,
  },
});
