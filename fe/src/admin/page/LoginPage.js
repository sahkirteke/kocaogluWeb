import React, { useState, useEffect } from 'react';
import Input from '../component/Input'; 
import ButtonWithProgress from '../component/ButtonWithProgress';
import { useApiProgress } from '../shared/ApiProgress'; 

import { useDispatch } from 'react-redux';
import { loginHandler } from '../redux/authActions'; 


const LoginPage =(props)=> {
  // static contextType = Authentication;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setError(undefined);
  }, [username, password]);

   const onClickLogin = async event => {
    event.preventDefault();
    const creds = {
      username,
      password
    };

    const { history } = props;
    const { push } = history;

    setError(undefined);
    try {
      await dispatch(loginHandler(creds));
      push('/adminPanel');
    } catch (apiError) {
      setError(apiError.response.data.message);
    }
  };

  const pendingApiCall = useApiProgress('/api/1.0/auth');

  const buttonEnabled = username && password;

    return (
      <div className="container">
        <form>
          <h1 className="text-center">{('Giriş')}</h1>
          <Input label={('Giriş')}  onChange={event => setUsername(event.target.value)} />
          <Input label={('Şifre')}type="password" onChange={event => setPassword(event.target.value)} />
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="text-center">
            <ButtonWithProgress
              onClick={ onClickLogin}
              disabled={!buttonEnabled || pendingApiCall}
              pendingApiCall={pendingApiCall}
              text={('Giriş')}
            />
          </div>
        </form>
      </div>
    );
  
} 

export default  LoginPage ;