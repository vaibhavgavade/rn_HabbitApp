import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Card from '../Component/Card';
import Font from '../assets/Font';
import {Images} from '../Constant/Images';
import CalendarStrip from 'react-native-calendar-strip';
import * as progress from 'react-native-progress';
import {connect} from 'react-redux';
import {CheckBox} from '../Component/CheckBox';
import {LoadLoader} from '../Redux/action/ActionData';
import {duration} from 'moment';

const HomeScreeen = ({LoadLoader, navigation, data}) => {
  const [Colors, changeColors] = useState([
    '#006400',
    '#6495ed',
    '#9932cc',
    '#008000',
    '#ff0000',
    '#0000cd',
  ]);
  const [Cheks, changeChecks] = useState(false);
  const changeButton = (data, index) => {
    changeChecks(!data);
    LoadLoader(Cheks);
  };

  const {textStyle, imgStyle, flatListTextStyle} = Container;
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <View style={{flex: 2}}>
          <Text style={[textStyle, {fontFamily: Font.boldSans}]}>
            Most Popular
          </Text>
          <Text
            style={[textStyle, {fontFamily: Font.regularSans, fontSize: 16}]}>
            Habits
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('update', {id: data[0]})}>
            <Image style={imgStyle} source={Images.AddCircle} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <Card>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {
                  mydata: item[1],
                  myDataOne: item[2],
                })
              }>
              <View style={{padding: 10}}>
                <Text style={{fontFamily: Font.boldSans, fontSize: 20}}>
                  {item[0]}
                </Text>
                <Text
                  style={[flatListTextStyle, {fontFamily: Font.regularSans}]}>
                  {item[1]}
                </Text>
                <Text style={{fontFamily: Font.regularSans, fontSize: 18}}>
                  {item.typeName}
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        )}
      />

      <CalendarStrip
        calendarAnimation={{type: 'sequence', duration: 300}}
        selection={'border'}
        // selectionAnimation={{duration: 300, borderWidth: 1}}
        style={{
          height: 70,
          marginLeft: 5,
          marginRight: 5,
          marginTop: 50,
          borderRadius: 5,
          fontSize: 20,
        }}
        calendarHeaderStyle={{color: 'white'}}
        calendarColor={'#c71585'}
        dateNumberStyle={{color: '#000000'}}
        dateNameStyle={{color: '#000000'}}
        highlightDateNumberStyle={{color: '#008000'}}
        highlightDateNameStyle={{color: '#008000'}}
      />
      <View style={{fle1: 1, flexDirection: 'row'}}>
        <Text style={{margin: 10, fontSize: 20, fontFamily: Font.boldSans}}>
          Your Habbits
        </Text>
        <View
          style={{
            backgroundColor: '#008b8b',
            height: 25,
            width: 25,
            borderRadius: 15,
            marginTop: 12,
          }}>
          <Text
            style={{
              color: '#000000',
              alignSelf: 'center',
              paddingTop: 5,
            }}>
            {data.length}
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        extraData={Cheks}
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: '#6a5acd',
              marginVertical: 10,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 10,
              height: 80,
              borderBottomLeftRadius: 100,
              borderTopLeftRadius: 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  changeButton(Cheks, index);
                }}>
                <CheckBox isChecked={Cheks} />
              </TouchableOpacity>

              <View style={{flex: 3}}>
                <Text
                  style={{
                    marginTop: 5,
                    fontFamily: Font.regularSans,
                    fontSize: 20,
                    marginLeft: 20,
                  }}>
                  {item[0]}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontFamily: Font.regularSans,
                    marginLeft: 20,
                  }}>
                  {item[1]}
                </Text>

                <progress.Bar
                  progress={item[2]}
                  width={300}
                  style={{marginLeft: 20, marginTop: 5}}
                  color={Colors[Math.floor(Math.random() * Colors.length)]}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = ({reduc1}) => {
  console.log('Test Props', reduc1);
  const {data} = reduc1;
  return {data};
};

export default connect(mapStateToProps, {LoadLoader})(HomeScreeen);

const Container = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'red',
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 25,
  },
  imgStyle: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
  flatListTextStyle: {
    paddingTop: 25,
    fontSize: 18,
  },
});
