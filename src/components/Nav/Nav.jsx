import { Link, NavLink } from 'react-router';
import { BrandNavLink } from './BrandNavLink';
import { useAuthContext } from '../../features/Auth/AuthContext';

import logo from '../../assets/logo.png';
import styles from './Nav.module.css';

export function Nav() {
  const { user, logout } = useAuthContext();
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="Scoala informala logo" width="150" />
      </Link>
      <menu className={styles.mainMenu}>
        <li><BrandNavLink to="/">Home</BrandNavLink></li>
        <li><BrandNavLink to="/todos">Todos</BrandNavLink></li>
        <li><BrandNavLink to="/counter">Counter</BrandNavLink></li>
        {!user && (
          <>
            <li className={styles.pushRight}><BrandNavLink to="/register">Register</BrandNavLink></li>
            <li><BrandNavLink to="/login">Login</BrandNavLink></li>
          </>
        )}
        {user && (
          <li className={styles.pushRight}>
            Welcome, {user.firstName}!
            <a href="/" onClick={(e) => {
              e.preventDefault(); 
              logout();
            }}>Logout</a>
          </li>
        )}
      </menu>
    </nav>
  )
}
