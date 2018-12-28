import React from 'react';
// import { Logo, Form, Wallpaper, ButtonSubmit, SignupSection, Error } from '../../components/LoginScreenSpecific';
import Logo from "../../components/LoginScreenSpecific/Logo";
import Form from "../../components/LoginScreenSpecific/Form";
import Wallpaper from "../../components/LoginScreenSpecific/Wallpaper";
import ButtonSubmit from "../../components/LoginScreenSpecific/ButtonSubmit";
import SignupSection from "../../components/LoginScreenSpecific/SignupSection";
import Error from "../../components/LoginScreenSpecific/Error";

const LoginScreen = () => {
  return (
    <Wallpaper>
      <Logo />
      <Form />
      <SignupSection />
      <ButtonSubmit navigateTo={'basestech.WelcomeScreen'} />
      <Error />
    </Wallpaper>
  );
}

export default LoginScreen;