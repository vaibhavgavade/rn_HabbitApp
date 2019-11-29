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
} from 'react-native';
import Card from '../Component/Card';
import Font from '../assets/Font';
import {Images} from '../Constant/Images';
import Update from '../Component/Update';
import {arr} from '../Constant/Arr';
import CalendarStrip from 'react-native-calendar-strip';
import * as progress from 'react-native-progress';
import {connect} from 'react-redux';

const HomeScreeen = ({navigation, data}) => {
  const [state, stateChange] = useState(new Date());
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
          <TouchableOpacity onPress={() => navigation.navigate('update')}>
            <Image style={imgStyle} source={Images.AddCircle} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => (
          <Card>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <View style={{padding: 10}}>
                <Text style={{fontFamily: Font.boldSans, fontSize: 20}}>
                  {item.title}
                </Text>
                <Text
                  style={[flatListTextStyle, {fontFamily: Font.regularSans}]}>
                  {item.type}
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
        calendarAnimation={{type: 'sequence', duration: 30}}
        selection={'border'}
        selectionAnimation={{duration: 300, borderWidth: 1}}
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
        highlightColor={'#9265DC'}
        dateNumberStyle={{color: '#000000'}}
        dateNameStyle={{color: '#000000'}}
        highlightDateNumberStyle={{color: '#008000'}}
        highlightDateNameStyle={{color: '#008000'}}
        borderHighlightColor={'#0000ff'}
        iconContainer={{flex: 0.1}}
      />

      <Text style={{margin: 10, fontSize: 20, fontFamily: Font.boldSans}}>
        Your Habbits
      </Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#6a5acd',
              marginVertical: 10,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 10,
              height: 80,
            }}>
            <Text
              style={{
                marginTop: 5,
                fontFamily: Font.regularSans,
                fontSize: 20,
                marginLeft: 10,
              }}>
              {item[0]}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: Font.regularSans,
                marginLeft: 10,
              }}>
              {item[1]}
            </Text>

            <progress.Bar
              progress={item[2]}
              width={350}
              style={{marginLeft: 10, marginTop: 5}}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = ({reduc1}) => {
  const {data} = reduc1;
  return {data};
};

export default connect(mapStateToProps)(HomeScreeen);

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
