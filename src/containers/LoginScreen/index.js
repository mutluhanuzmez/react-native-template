import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation'
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Wallpaper from '../../components/Wallpaper';
import ButtonSubmit from '../../components/ButtonSubmit';
import SignupSection from '../../components/SignupSection';
import { goToWelcome } from '../../navigation';

export default class LoginScreen extends Component {

  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit onPress = { goToWelcome } />
      </Wallpaper>
    );
  }
}