import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { auth, navigateToPage, animateStart } from '../../../state/actions';
import {
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  View,
  ActivityIndicator
} from 'react-native';
import styles from './styles';


const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

const ButtonSubmit = props => {

  buttonAnimated = new Animated.Value(0);
  growAnimated = new Animated.Value(0);

  _onPress = () => {
    if (props.loading) return;

    props.auth(props.email, props.password, buttonAnimated, growAnimated, props.navigateTo);

    props.animateStart(buttonAnimated, 1, 200, Easing.linear);
  }

  changeWidth = buttonAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
  });
  changeScale = growAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, MARGIN],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ width: changeWidth }}>
        <TouchableOpacity
          style={[styles.button, props.error !== null ? styles.failedBorder : null]}
          onPress={this._onPress}
          activeOpacity={1}>
          {props.loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
              <Text style={styles.text}>{props.submitButtonText}</Text>
            )}
        </TouchableOpacity>
        <Animated.View
          style={[styles.circle, { transform: [{ scale: changeScale }] }]}
        />
      </Animated.View>
    </View>
  );
}


const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth.loading,
    error: state.auth.errorAlert,
    animate: state.auth.animate,
    submitButtonText: state.auth.submitButtonText
  };
}

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, butAnimation, navAnimation, navigateTo) => dispatch(auth(email, password, butAnimation, navAnimation, navigateTo)),
    navigate: (pageName) => dispatch(navigateToPage(pageName)),
    animateStart: (animationItem, toValue, duration, easing) => dispatch(animateStart(animationItem, toValue, duration, easing))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubmit)