import { Col, Container, Row } from "react-bootstrap";
import styles from './RowTitle.module.scss';

type TitleProps = {
  title: string
}

export default function RowTitle({title}: Readonly<TitleProps>) {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
        </Col>
      </Row>
    </Container>
  )
}