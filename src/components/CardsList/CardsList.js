import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiService } from '../../services/api-service';
import styles from './CardsList.module.css';
import CardItem from '../CardItem/CardItem';

const CardsList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [topArticle, setTopArticle] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const { category } = useParams();
  const [currentCategory, setCurrentCategory] = useState(category);

  const navigate = useNavigate();

  const country = 'us';
  const pageSize = 11;

  useEffect(() => {
    if (category !== currentCategory) {
      setPageNumber(1);
      setCurrentCategory(category);
    }
  }, [category]);

  useEffect(() => {
    const getArticles = () => {
      apiService(country, currentCategory, pageNumber, pageSize)
        .then(data => {
          const list = data.articles || [];

          if (pageNumber === 1) {
            setTopArticle(list[0]);
            setArticlesList(list.slice(1));
          } else {
            setArticlesList(articlesList.concat(list));
          }

          setTotalResults(data.totalResults);
        })
        .catch(error => {
          navigate('/404');
          console.log(error);
        })
    }

    getArticles();
  }, [currentCategory, pageNumber]);

  // Not implemented, but if no articles in the response I would show proper message

  return (
    <>
      <section className={styles.cardSection}>
        <h1 className={styles.cardSectionTitle}>
          {category
            ? `Latest ${category} news`
            : 'Breaking news'
          }
        </h1>
        <CardItem
          isTopCard
          title={topArticle.title}
          description={topArticle.description}
          url={topArticle.url}
          urlToImage={topArticle.urlToImage}
          publishedAt={topArticle.publishedAt}
        />
      </section>
      <ul>
        {articlesList.map(article => (
          <CardItem
            key={article.title}
            category={category}
            author={article.author}
            title={article.title}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
          />
        ))}
      </ul>
      <div className={styles.listFooter}>
        {pageNumber * pageSize < totalResults &&
          <button
            type="button"
            className="button-accent-reverse button-large"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Load more
          </button>
        }
      </div>
    </>
  );
};

export default CardsList;
