import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import strings from '../../../resources/strings';

const SignupSection = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{strings.createAccount.createAccount}</Text>
        <Text style={styles.text}>{strings.forgotPassword.forgotPassword}</Text>
      </View>
    );
}

export default SignupSection;