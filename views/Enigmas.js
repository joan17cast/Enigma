/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ListView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApjVv2fxBkdXmvvfFx8L6YI_RfVAVOCUs",
  authDomain: "enigma-ae63b.firebaseapp.com",
  databaseURL: "https://enigma-ae63b.firebaseio.com",
  storageBucket: "enigma-ae63b.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


class Enigmas extends React.Component {
  static navigationOptions = {
  title: 'Welcome',
  header: null
  };
  constructor(props) {
  super(props);
  this.itemsRef = firebaseApp.database().ref();
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
}
listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }
  componentDidMount() {
      this.listenForItems(this.itemsRef);
    }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 150, height: 200}}
          source={require('../img/enigma.png')}
        />
        
        <TextInput
          placeholder='Answer'
          placeholderTextColor="#C1C1C1"
          style={styles.answer}
          autocorrect={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0B0B',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  answer: {
    width: 200,
    color: '#C1C1C1',
    backgroundColor: '#0B0B0B',
  },
});

module.exports = Enigmas;
