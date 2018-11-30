import React from 'react';
import { Logo, Form, Wallpaper, ButtonSubmit, SignupSection, Error } from '../../components/LoginScreenSpecific'; 

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