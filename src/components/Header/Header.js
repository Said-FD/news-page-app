import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
        <div className={styles.actions}>
          <ul className={styles.actionsList}>
            <li className={styles.actionsListItem}>
              <button type="button" className="button-text">
                Newsletter
              </button>
            </li>
            <li className={styles.actionsListItem}>
              <button type="button" className="button-text">
                Sign In
              </button>
            </li>
            <li className={styles.actionsListItem}>
              <button type="button" className="button-accent button-medium">
                Subscribe
              </button>
            </li>
            <li className={`${styles.actionsListItem} ${styles.actionsListItemSearch}`}>
              <button type="button" className={`button-text ${styles.buttonSearch}`} aria-label="search">
                <svg width="18" height="19" aria-hidden="true">
                  <use href="#icon-search" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
