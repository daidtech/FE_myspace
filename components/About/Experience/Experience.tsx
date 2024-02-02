import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <Container>
        <Row>
          <Col>
            <div className={styles.title}>
              <h1>Our Work Experience</h1>
              <p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <div className={styles.wrapCounter}>
              <div className={styles.counterInter}></div>
              <div className={styles.counterOuter}></div>
              <p>1</p>
            </div>
          </Col>
          <Col lg={4}>
            <h4>March 2020 - Now</h4>
            <h4>Web developer tại NUS</h4>

          </Col>
          <Col lg={4}>

          </Col>
        </Row>
      </Container>

    </section>
  )
}