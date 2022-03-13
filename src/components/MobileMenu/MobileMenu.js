import React from 'react';
import ReactDOM from 'react-dom';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ menuOpen, onCloseMenu }) => {
  const isActiveClass = menuOpen ? styles.isActive : styles.isHidden;

  return ReactDOM.createPortal(
    <div className={`${styles.mobileMenuContainer} ${isActiveClass}`}>
      <div className={styles.mobileMenu}>
        <button
          type="button"
          className={`button-text ${styles.buttonClose}`}
          aria-label="close menu"
          onClick={menuOpen => onCloseMenu(!menuOpen)}
        >
          <svg width="24" height="24" aria-hidden="true">
            <use href="#icon-close" />
          </svg>
        </button>

        {/* This list could be a dedicated component, which will be used here and inside the Header component. But I just had copied it from the Header for test purposes */}
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
        </ul>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default MobileMenu;
