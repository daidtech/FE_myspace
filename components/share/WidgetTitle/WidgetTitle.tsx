import React from 'react';
import styles from './WidgetTitle.module.scss';

type WidgetTitleProps = {
  title: string;
}

export default function WidgetTitle({ title }: Readonly<WidgetTitleProps>) {
  return (
    <h3 className={styles.widgetTitle}>
      {title}
    </h3>
  );
}