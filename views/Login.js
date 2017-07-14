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
  TouchableHighlight,
  TextInput
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

var Enigmas = require('./Enigmas');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userLoaded: false,
      email: '',
      password: '',
      response: ''
    };
    this.getInitialView();
    this.getInitialView = this.getInitialView.bind(this);
  }

  getInitialView(){
    firebase.auth().onAuthStateChanged((user) =>{
      this.setState({
        userLoaded: true,
      })
    })
    this.loadEnigmas();
  }
  async signUp() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      //TODO: - Alert avisant de que s'ha creat la conta correctament
      //TODO: - Falta veure si s'ha de pasar el id de usuari dins de la navegacio
      this.props.navigation.navigate('Enigmas');
    } catch(error) {
      console.log(error);
      //TODO: - Alert amb el error
    }
  }
  async logIn() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      //TODO: - Alert avisant de que s'ha creat la conta correctament
      //TODO: - Falta veure si s'ha de pasar el id de usuari dins de la navegacio
      this.props.navigation.navigate('Enigmas');
    } catch(error) {
      console.log(error);
      //TODO: - Alert amb el error
    }
  }

  loadEnigmas() {
    if (this.state.userLoaded == true) {
      //TODO: - Falta veure si s'ha de pasar el id de usuari dins de la navegacio
      this.props.navigation.navigate('Enigmas');
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Enigma
        </Text>

        <TextInput
          placeholder="example@mail.com"
          style={styles.textsInput}
          onChangeText={(email) => this.setState({email})}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textsInput}
          onChangeText={(password) => this.setState({password})}
        />

        <TouchableHighlight  onPress={this.logIn.bind(this)}>
          <Text> Login </Text>
        </TouchableHighlight>

        <TouchableHighlight  onPress={this.signUp.bind(this)}>
          <Text> Register </Text>
        </TouchableHighlight>

      </View>
    );
  }
}
//TODO Onpres button per anar a la pantalla de Enigmas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  textsInput: {
    width: 250,
  }
});

module.exports = Login;
