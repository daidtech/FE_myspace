import styles from './ListItem.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function ListItem() {
  return (
    <div className={styles.blog}>
      <Container>
        <Row>
          <Col md={4}>
            <img className={styles.thumbnail} src="/images/1.jpg" alt="Thumbnail" />
          </Col>
          <Col md={8}>
            <h4>
              <a href="#">
                Tình huống tranh cãi biến Real Madrid thành cựu vương Copa del Rey
              </a>
            </h4>
            <p>Rạng sáng 19/1 (giờ Hà Nội), Atletico Madrid đánh bại Real Madrid 4-2 để vào tứ kết Cúp Nhà vua.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}