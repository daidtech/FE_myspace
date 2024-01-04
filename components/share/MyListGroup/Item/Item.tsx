import { Badge, ListGroup } from 'react-bootstrap';
import styles from './Item.module.scss';

export default function Item() {
  return (
    <ListGroup.Item action className={styles.item}>
      <p>Design</p>
      <h5><Badge bg="secondary">15</Badge></h5>
    </ListGroup.Item>
  )
}