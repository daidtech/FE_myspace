import React from 'react';
import styles from './Tag.module.scss';

export default function Tag() {
  return (
    <button className={styles.tag}>
      <span>on</span>
      <p>Business</p>
    </button>
  );
}