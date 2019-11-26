import React from 'react';
import { Link } from 'react-router-dom';

import { Top } from './styles';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

export default function Header() {
  return (
    <Top>
      <div>
        <Link to="/">
          <img src={logo} alt="InstaClone"/>
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar publicação" />
        </Link>
      </div>
    </Top>
  );
}
