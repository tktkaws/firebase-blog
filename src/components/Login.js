import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <div>Login</div>
      <button onClick={loginWithGoogle}>loginWithGoogle</button>
    </div>
  );
};

export default Login;