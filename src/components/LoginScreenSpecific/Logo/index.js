import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';
import logo from '../../../resources/images/basestech_logo.png';
import styles from './styles';
import images from '../../../resources/images';

const Logo = () => {
    return (
      <View style={styles.container}>
        <Image source={images.logo} style={styles.image} />
      </View>
    );
}

export default Logo;


