import { Badge } from 'react-bootstrap';
import styles from './Item.module.scss';

export default function Item() {
  return (
    <div className={styles.item}>
      <p>Design</p>
      <Badge bg="secondary">15</Badge>
    </div>
  )
}