import React from 'react';
import s from '../styles/Header.module.css';
type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav id={s.nav}>
        <div className={s.logo}>Jason Johnson</div>
        <ul className={s.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
