import { NavLink } from 'react-router';
import clsx from 'clsx';

import styles from './Nav.module.css';

export function BrandNavLink({className, ...props}) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => clsx(className, { [styles.active]: isActive })}
    />
  );
}

// React.createElement(NavLink, {...props, className: ({ isActive }) => clsx(className, { [styles.active]: isActive })})
