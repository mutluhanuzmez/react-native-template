import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const SignupSection = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
}

export default SignupSection;