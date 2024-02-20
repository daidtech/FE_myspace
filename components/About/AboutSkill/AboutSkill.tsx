import { Container, Row, Col } from "react-bootstrap";
import styles from './AboutSkil.module.scss';

export default function AboutSkill() {

  return (
    <section className={styles.aboutSkill}>
      <Container>
        <Row>
          <Col>
            <h3>
              Let Know Our Expert Skills
            </h3>
            <p>
              Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo. Sed ut nibh feugiat, auctor enim quis, hendrerit ipsum. Aenean blandit lacinia suscipit. Nunc ut tincidunt massa, eu semper lacus.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <h2 className={styles.skillBoxTitle}>Programming languages</h2>
              <ul>
                <li> C#. NET </li>
                <li> JavaScript </li>
                <li> HTML, CSS </li>
                <li> Java </li>
              </ul>
              <h2 className={styles.skillBoxTitle}>Frameworks & platforms</h2>
              <ul>
                <li>ReactJS / AngularJS / NodeJS</li>
                <li>jQuery / Twitter Bootstrap / Materialize CSS</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <h2 className={styles.skillBoxTitle}>Programming languages</h2>
              <ul>
                <li> C#. NET </li>
                <li> JavaScript </li>
                <li> HTML, CSS </li>
                <li> Java </li>
              </ul>
              <h2 className={styles.skillBoxTitle}>Frameworks & platforms</h2>
              <ul>
                <li>ReactJS / AngularJS / NodeJS</li>
                <li>jQuery / Twitter Bootstrap / Materialize CSS</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.skillBox}>
              <h2 className={styles.skillBoxTitle}>Programming languages</h2>
              <ul>
                <li> C#. NET </li>
                <li> JavaScript </li>
                <li> HTML, CSS </li>
                <li> Java </li>
              </ul>
              <h2 className={styles.skillBoxTitle}>Frameworks & platforms</h2>
              <ul>
                <li>ReactJS / AngularJS / NodeJS</li>
                <li>jQuery / Twitter Bootstrap / Materialize CSS</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}