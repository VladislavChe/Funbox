import React from 'react';
import styles from './Card.module.scss';

export const Card = ({ item }) => {
  const [active, setActive] = React.useState(false);
  const [topText, setTopText] = React.useState(false);
  const [mouseVisited, setMouseVisited] = React.useState(false);

  const onSelect = () => {
    setActive(!active);
    setTopText(false);
  };

  const mouseOnOver = () => {
    if (mouseVisited) {
      setTopText(true);
    } else {
      setMouseVisited(true);
    }
  };

  const mouseInOut = () => {
    setTopText(false);
  };

  return (
    <div
      className={`${styles.сard} ${
        !item.inStock ? styles.disabled : active ? styles.selected : ''
      }`}
      onClick={onSelect}
      onMouseOut={mouseInOut}
      onMouseOver={mouseOnOver}>
      <div className={`${styles.body} ${!item.inStock ? styles.disabled : ''}`}>
        <div className={styles.topText}>
          {active && topText ? (
            <p className={styles.agree}>Котэ не одобряет?</p>
          ) : (
            <p>Сказочное заморское яство</p>
          )}
        </div>
        <h2 className={styles.title}>Нямушка</h2>
        <p className={styles.stuffed}>{item.stuffed}</p>
        <div className={styles.description}>
          <p className={styles.pcs}>
            <span>{item.pcs}</span> порций
          </p>
          <p className={styles.bonus}>
            <span>{item.mouse > 0 ? item.mouse : ''} </span>
            {item.bonus}
          </p>
        </div>
        <img className={styles.photo} src={require('../../img/card-cat.png')} alt="Cat" />
        <div className={styles.kilogram}>
          <span>{item.kg}</span>
          <p>кг</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.buy}>
          {!item.inStock ? (
            <p className={styles.disabledText}>Печалька, {item.stuffed} закончился.</p>
          ) : active ? (
            <p>{item.description}</p>
          ) : (
            <p>
              Чего сидишь? Порадуй котэ, <span>купи.</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
