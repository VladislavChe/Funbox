import { Card } from '../Card/Card';
import styles from './Header.module.scss';

export const Header = (props) => {
  const items = [
    {
      id: 1,
      stuffed: 'с фуа-гра',
      pcs: 10,
      mouse: 0,
      bonus: 'мышь в подарок',
      kg: 0.5,
      description: 'Печень утки разварная с артишоками.',
      inStock: true,
    },
    {
      id: 2,
      stuffed: 'с рыбой',
      pcs: 40,
      mouse: 2,
      bonus: 'мыши в подарок',
      kg: 2,
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      inStock: true,
    },
    {
      id: 3,
      stuffed: 'с курой',
      pcs: 100,
      mouse: 5,
      bonus: 'мышей в подарок заказчик доволен',
      kg: 5,
      description: 'Филе из цыплят с трюфелями в бульоне.',
      inStock: false,
    },
  ];

  return (
    <div className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
        <ul className={styles.list}>
          {items.map((item, index) => {
            return (
              <li className={styles.item} key={`${item} ${index}`}>
                <Card item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
