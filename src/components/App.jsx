import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import styles from './App.module.css';
import Feedback from './Feedback/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });
  const handleFeedback = type => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.Good + feedbackCounts.Neutral + feedbackCounts.Bad;

  return (
    <div className={styles.container}>
      <Feedback handleFeedback={handleFeedback} />

      {totalFeedback === 0 ? (
        <div className={styles.title}>
          <p>There is no feedback</p>
        </div>
      ) : (
        <Statistics feedbackCounts={feedbackCounts} />
      )}
    </div>
  );
};
