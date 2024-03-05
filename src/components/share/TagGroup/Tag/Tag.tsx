import React from 'react';
import styles from './Tag.module.scss';

type TagProps = {
  isChecked: boolean
}

export default function Tag({isChecked}: TagProps) {
  return (
    <button className={styles.tag + ' checked ' }>
      <span>on</span>
      <p>Business</p>
    </button>
  );
}