import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { setEmail, setPassword, showPassword } from '../../../state/actions';

import styles from './styles';
import UserInput from '../UserInput';
import images from '../../../resources/images';

const Form = props => {
  return (
    <View style={styles.container}>
      <UserInput
        source={images.username}
        onChangeText={props.setEmail}
        placeholder="Username"
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
      />
      <UserInput
        source={images.password}
        onChangeText={props.setPassword}
        secureTextEntry={props.secureTextEntry}
        placeholder="Password"
        returnKeyType={'done'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnEye}
        onPress={props.showPassword}>
        <Image source={images.eye_black} style={styles.iconEye} />
      </TouchableOpacity>
    </View>
  );
}


const mapStateToProps = state => {
  return {
    secureTextEntry: state.auth.secureEntry
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
    showPassword: () => dispatch(showPassword()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);




