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
        <Row>
          <Col>
            <div className={styles.educationBlock} >
              <div className={styles.educationTime}>
                <p>
                  2015 <br/>
                  - <br/>
                  2019
                </p>
              </div>
              <div className={styles.educationInfo}>
                <h4>
                  BACHELOR DEGREE Software Engineering
                </h4>
                <p>Can Tho University of Technology</p>
              </div>
              <div className={styles.detail}>
                <ul>
                  <li>
                    Top 5 graduated student in 2019. GPA: 8.8/10. Degree grade: Good
                  </li>
                  <li>
                    Best student in courses: Data structures and algorithms.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )

}