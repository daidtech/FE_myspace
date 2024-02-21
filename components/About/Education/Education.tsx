import { Container, Row, Col } from "react-bootstrap";
import styles from './Education.module.scss';

export default function Education() {
  return (
    <section className={styles.education}>
      <Container>
        <Row>
          <Col>
            <div className={styles.title}>
              <h2>Education</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )

}