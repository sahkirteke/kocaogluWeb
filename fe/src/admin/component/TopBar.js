import React  from 'react';
import logo from '../assets/Photo-0654.jpg';
import { Link } from 'react-router-dom';  
import { logoutSuccess } from '../redux/authActions'; 

import { useDispatch, useSelector } from 'react-redux';

const TopBar =props=> { 

  const {   isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn,
    username: store.username
  }));

     const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };
    let links = (
      <ul className="navbar-nav  ">
        <li>
          <Link className="nav-link" to="/login">
             Giriş 
          </Link>
        </li>
        
      </ul>
    );
    if (isLoggedIn) {
      links = (
        <ul className="navbar-nav  "> 
          <li className="nav-link" onClick={onLogoutSuccess} style={{ cursor: 'pointer' }}>
          <Link className="nav-link" to={`/login`}>
              Çıkış
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <div className='shadow-sm bg-light mb-3'>
      <nav className='navbar navbar-light  container '>
          <Link className="navbar-brand" to="/adminPanel">
            <img src={logo} width="60" alt="Kocaoglu Logo" />
            Hoaxify
          </Link>
          {links}
        </nav>
      </div>
    );
  }
 
 

 

export default TopBar;