import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <NavLink to="/business" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            Business
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink to="/entertainment" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            Entertainment
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink to="/general" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            General
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink to="/health" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            Health
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink to="/science" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            Science
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink to="/sports" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            Sports
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink to="/technology" className={navLink => navLink.isActive ? 'is-active-link' : ''}>
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
