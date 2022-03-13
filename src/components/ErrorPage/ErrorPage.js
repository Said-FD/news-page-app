import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return ReactDOM.createPortal(
    <div className={styles.errorPage}>
      <Link to="/">
        <svg width="215" height="22" title="anderson post">
          <use href="#icon-logo" />
        </svg>
      </Link>
      <section className={styles.errorPageSection}>
        <h1 className={styles.errorPageHeading}>Page not found.</h1>
        <Link to="/" className="button-text">Back to Home</Link>
      </section>
    </div>,
    document.getElementById('portal')
  );
};

export default ErrorPage;
