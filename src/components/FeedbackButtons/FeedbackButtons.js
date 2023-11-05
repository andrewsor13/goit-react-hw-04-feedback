import React from 'react';
import styles from './feedbackButtons.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FeedbackButtons({ options, onLeaveFeedback }) {
  return (
    <div className={styles.button_container}>
      {options.map(option => (
        <button
          className="btn btn-primary btn-lg"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
