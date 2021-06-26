import React from "react";
import BackgroundRegister from '../src/components/BackgroundRegister';
import LoginRegister from '../src/components/LoginRegister';

const RegisterPage = ({type}) => {
  return(
    <BackgroundRegister>
      <LoginRegister type={type}/>
    </BackgroundRegister>
  )
}

export default RegisterPage;