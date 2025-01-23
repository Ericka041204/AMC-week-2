import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <Text> Some text </Text>
    <View>
    <Text> Some more text </Text>
    <Image
    source={{
      uri:
    'https://th.bing.com/th/id/OIP.vrbopt9dj0VSm784eXvGzAHaHa?w=186&h=180&c=7&r=0&o=5&pid=1.7&#39;,}}
    style={{width: 200, height:    200}} />
    </View>
    <TextInput
    style={{
      height: 40,
      bordercolor: 'gray',
      borderwidth: 1,
    }}
    defaultValue="You can type in me"
    />
    </ScrollView>
  );
};