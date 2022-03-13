import React from 'react';
import styles from './CardItem.module.css';

const CardItem = ({
  category,
  author,
  title,
  url,
  urlToImage,
  publishedAt,
  description,
  isTopCard
}) => {
  const renderTopCardImage = () => (
    urlToImage
      ? <img className={styles.image} src={urlToImage} alt="top story" />
      : <svg width="100" height="100" aria-hidden="true">
          <use href="#icon-image" />
        </svg>
  );

  const renderListItemImage = () => (
    urlToImage
      ? <img className={styles.image} src={urlToImage} alt={category ? category : ''} loading="lazy" />
      : <svg width="60" height="60" aria-hidden="true">
          <use href="#icon-image" />
        </svg>
  );

  const renderAuthorName = () => (
    <>
      <span className={styles.detailsName}>{author}</span>
      <span className={styles.detailsSeparator}>&bull;</span>
    </>
  );

  const renderTopCard = () => (
    <div className={styles.topCard}>
      <a className={styles.cardLink} href={url}>
        <div className={styles.imageWrapper}>
          {renderTopCardImage()}
        </div>
        <p className={styles.categoryName}>
          Top story
        </p>
        <h2 className={`${styles.title} line-clamp-4`}>
          {title}
        </h2>
        <p className={`${styles.description} line-clamp-3`}>
          {description}
        </p>
        <p className={styles.details}>
          {new Date(publishedAt).toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </a>
    </div>
  );

  const renderListItemCard = () => (
    <li className={styles.cardsListItem}>
      <a className={styles.cardLink} href={url}>
        <div className={styles.imageWrapper}>
          {renderListItemImage()}
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.categoryName}>
            {category}
          </p>
          <h2 className={`${styles.title} line-clamp-3`}>
            {title}
          </h2>
          <p className={styles.details}>
            {author && renderAuthorName()}
            {new Date(publishedAt).toLocaleString([], {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            })}
          </p>
        </div>
      </a>
    </li>
  );

  return (
    isTopCard ? renderTopCard() : renderListItemCard()
  );
};

export default CardItem;
