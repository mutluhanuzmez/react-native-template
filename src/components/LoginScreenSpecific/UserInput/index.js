import React, {Component} from 'react';
import { View, TextInput, Image} from 'react-native';
import styles from './styles';

const UserInput = props => {
    return (
      <View style={styles.inputWrapper}>
        <Image source={props.source} style={styles.inlineImg} />
        <TextInput
          onChangeText={(text) => props.onChangeText(text)}
          style={styles.input}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          autoCorrect={props.autoCorrect}
          autoCapitalize={props.autoCapitalize}
          returnKeyType={props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
}

export default UserInput;