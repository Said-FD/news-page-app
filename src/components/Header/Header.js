import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import useWindowWidth from '../../services/hooks-service';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserActions from '../UserActions/UserActions';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { windowWidth } = useWindowWidth();
  const breakpoint = 980;

  return (
    <>
      <MobileMenu
        menuOpen={isMenuOpen}
        onCloseMenu={menuOpen => setMenuOpen(menuOpen)}
      />

      <header className={styles.header}>
        <button
          type='button'
          className={`button-text ${styles.buttonMenu}`}
          aria-label="open menu"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg width="20" height="20" aria-hidden="true">
            <use href="#icon-menu" />
          </svg>
        </button>
        <Link to="/">
          <svg width="215" height="22" title="anderson post">
            <use href="#icon-logo" />
          </svg>
        </Link>
        <ul className={styles.actionsList}>
          {windowWidth > breakpoint && <UserActions />}
          <li className={styles.actionsListItemSearch}>
            <button type="button" className={`button-text ${styles.buttonSearch}`} aria-label="search">
              <svg width="18" height="19" aria-hidden="true">
                <use href="#icon-search" />
              </svg>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
