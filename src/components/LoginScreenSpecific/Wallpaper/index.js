import React from 'react';
import { ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

import images from '../../../resources/images';

const Wallpaper = props => {
  return (
    <ImageBackground style={styles.picture} source={images.wallpaper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.transparent}>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

export default Wallpaper;


