import { Badge, ListGroup } from 'react-bootstrap';
import styles from './Item.module.scss';

type ItemProps = {
  count: number,
  level?: number
}

export default function Item({count, level = 0}: Readonly<ItemProps>) {
  if(count == 0) return (<></>)
  return (
    <ListGroup.Item action className={styles.item}>
      <p>
        <span>{[...Array(level)].map((_, index) => (
          <span key={index}>--</span>
        ))}</span>
        <span>Design</span>
      </p>
      <h5><Badge bg="secondary">{count}</Badge></h5>
    </ListGroup.Item>
  )
}