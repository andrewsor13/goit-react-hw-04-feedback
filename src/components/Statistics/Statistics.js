import React from 'react';
import styles from './Statistics.module.css';
import {
  FaRegFaceLaughBeam,
  FaRegFaceMeh,
  FaRegFaceFrown,
} from 'react-icons/fa6';

export default function Statistics({ feedbackCounts }) {
  const { Good, Neutral, Bad } = feedbackCounts;
  const total = Good + Neutral + Bad;
  const positivePercentage =
    total === 0 ? 0 : ((Good / total) * 100).toFixed(2);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.ratings}>
        <li className={styles.ratings__item}>
          <p>Good: </p>
          <span className={styles.feedback_good}>{Good}</span>
        </li>
        <li className={styles.ratings__item}>
          <p>Neutral: </p>
          <span className={styles.feedback_neutral}>{Neutral}</span>
        </li>
        <li className={styles.ratings__item}>
          <p>Bad: </p>
          <span className={styles.feedback_bad}>{Bad}</span>
        </li>
        <li className={styles.ratings__item}>
          <p>Total: </p>
          <span>{total}</span>
        </li>
        <li className={styles.ratings__item}>
          <p>Positive feedback: </p>
          <span className={styles.ratings__item__total}>
            {positivePercentage >= 70 ? (
              <FaRegFaceLaughBeam color="green" />
            ) : positivePercentage >= 30 ? (
              <FaRegFaceMeh color="yellow" />
            ) : (
              <FaRegFaceFrown color="red" />
            )}
            <strong>{positivePercentage}</strong>%
          </span>
        </li>
      </ul>
    </div>
  );
}
