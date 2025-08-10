import React from 'react';
import Business from './Business';
import styles from './BusinessList.module.css';

const businesses = [
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc:
      'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
];

function BusinessList(props) {
  return (
    <section className={styles.businessListContainer}>
      {businesses.map((business, index) => (
        <Business key={business.name + index} restaurant={business} />
      ))}
    </section>
  );
}

export default BusinessList;
