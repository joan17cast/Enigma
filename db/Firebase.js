'use strict';

import * as firebase from 'firebase';

class Firebase {
  static init(){
    // Initialize Firebase
    return firebaseConfig = {
      apiKey: "AIzaSyApjVv2fxBkdXmvvfFx8L6YI_RfVAVOCUs",
      authDomain: "enigma-ae63b.firebaseapp.com",
      databaseURL: "https://enigma-ae63b.firebaseio.com",
      storageBucket: "enigma-ae63b.appspot.com",
    };
  }
}
module.exports = Firebase
