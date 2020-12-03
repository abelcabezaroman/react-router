import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default function Menu(){
    return (
        <nav className="c-menu">
          <ul className="c-menu__list">
            <li>
              <Link className="c-menu__link" to="/">Home</Link>
            </li>
            <li>
              <Link className="c-menu__link" to="/about">About</Link>
            </li>
            <li>
              <Link className="c-menu__link" to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    )
}