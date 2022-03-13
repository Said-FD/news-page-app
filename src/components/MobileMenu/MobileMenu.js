import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserActions from '../UserActions/UserActions';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ menuOpen, onCloseMenu }) => {
  useEffect(() => {
    const bodyElement = document.querySelector('body');
    const mobileMenuContainerElement = document.querySelector('.mobile-menu-container');

    const handleOverlayClick = event => {
      if (!event.target.closest('.mobile-menu')) {
        onCloseMenu(!menuOpen);
      }
    }

    if (menuOpen) {
      bodyElement.style.overflow = 'hidden';
      mobileMenuContainerElement.addEventListener('click', handleOverlayClick);
    } else {
      bodyElement.style.overflow = 'visible';
      mobileMenuContainerElement.removeEventListener('click', handleOverlayClick);
    }
  }, [menuOpen]);

  const isActiveClass = menuOpen ? styles.isActive : styles.isHidden;

  return ReactDOM.createPortal(
    <div className={`mobile-menu-container ${styles.mobileMenuContainer} ${isActiveClass}`}>
      <div className={`mobile-menu ${styles.mobileMenu}`}>
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
        <ul className={styles.actionsList}>
          <UserActions />
        </ul>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default MobileMenu;
