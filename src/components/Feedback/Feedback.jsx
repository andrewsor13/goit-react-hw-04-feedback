import React from 'react';
import FeedbackButtons from 'components/FeedbackButtons/FeedbackButtons';
import styles from './Feedback.module.css';

export default function Feedback({ handleFeedback }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleLetter}>F</span>
        <span className={styles.titleLetter}>e</span>
        <span className={styles.titleLetter}>e</span>
        <span className={styles.titleLetter}>d</span>
        <span className={styles.titleLetter}>b</span>
        <span className={styles.titleLetter}>a</span>
        <span className={styles.titleLetter}>c</span>
        <span className={styles.titleLetter}>k</span>
      </h2>
      <FeedbackButtons
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={handleFeedback}
      />
    </div>
  );
}
