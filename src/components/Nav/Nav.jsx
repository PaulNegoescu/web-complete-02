import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';

import clsx from 'clsx';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="Scoala informala logo" width="150" />
      </Link>
      <menu className={styles.mainMenu}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todos" className={({isActive}) => clsx({ [styles.active]: isActive})}>Todos</NavLink></li>
        <li><NavLink to="/counter">Counter</NavLink></li>
      </menu>
    </nav>
  )
}
