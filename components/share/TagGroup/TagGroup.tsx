import React from 'react';
import styles from './TagGroup.module.scss';
import Tag from './Tag/Tag';

export default function TagGroup() {
  return (
    <div className={styles.tagGroup}>
      <Tag isChecked={false} />
      <Tag isChecked={true} />
      <Tag isChecked={false} />

    </div>
  );
}