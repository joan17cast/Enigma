/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

var Login = require('./views/Login');
var Enigmas = require('./views/Enigmas');
var SignUp= require('./views/SignUp')
//var ListEntrepans = require('./views/ListEntrepans');

const AwesomeProject = StackNavigator({
  Login: { screen: Login },
  Enigmas: { screen: Enigmas },
  SignUp: {screen: SignUp}
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
