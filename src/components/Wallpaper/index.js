import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground, Image} from 'react-native';


import bgSrc from '../../resources/images/wallpaper.gif';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={require('../../resources/images/wallpaper.jpg')}>
        {this.props.children}
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    picture: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
  });