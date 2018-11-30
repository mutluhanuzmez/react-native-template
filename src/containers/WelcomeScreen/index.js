import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to The Template App!</Text>
    </View>
  );
}

export default WelcomeScreen;