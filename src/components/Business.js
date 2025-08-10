import React from 'react';
import styles from './Business.module.css';

function Business({ restaurant }) {
  const {
    imageSrc,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = restaurant;
  return (
    <div className={styles.businessContainer}>
      <img src={imageSrc} alt="" />
      <h3>{name}</h3>
      <div className={styles.infoContainer}>
        <div className={styles.businessDetails}>
          <div className={styles.location}>
            <p className={styles.info}>{address}</p>
            <p className={styles.info}>{city}</p>
            <p className={styles.info}>
              {state} {zipCode}
            </p>
          </div>
          <div className={styles.restaurantInfo}>
            <p className={styles.category}>
              {category.toUpperCase()}
            </p>
            <p className={styles.rating}>
              {rating} {rating === 1 ? 'star' : 'stars'}
            </p>
            <p className={styles.info}>
              {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
