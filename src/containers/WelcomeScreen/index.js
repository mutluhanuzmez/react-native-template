import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import strings from '../../resources/strings';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.onboarding.welcome.heading}</Text>
    </View>
  );
}

export default WelcomeScreen;