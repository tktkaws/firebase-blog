import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    
    });
  };

  return (
    <div>
      <div>Logout</div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;