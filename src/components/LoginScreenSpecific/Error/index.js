import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

const Error = props => {
    return (
        <View style={props.error ? styles.inputWrapper : styles.transparent}>
            <Text
                style={styles.input}
                underlineColorAndroid="transparent">
                {props.error}
            </Text>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
    }
}

export default connect(mapStateToProps, null)(Error);