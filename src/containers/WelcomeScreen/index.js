import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class LoginScreen extends Component {
  render() {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to The Template App!</Text>
            </View>
        );
  }
}