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
//var ListEntrepans = require('./views/ListEntrepans');

const AwesomeProject = StackNavigator({
  Login: { screen: Login },
  Enigmas: { screen: Enigmas },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
