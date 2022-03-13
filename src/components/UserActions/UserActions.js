import React from 'react';
import styles from './UserActions.module.css';

const UserActions = () => {
  return (
    <>
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
    </>
  );
};

export default UserActions;
