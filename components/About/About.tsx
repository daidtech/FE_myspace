import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.scss';


export default function About() {
  return (
    <section className={styles.about}>
      <Container>
        <Row>
          <Col lg={5}>
            <div className={styles.aboutImageBox}>
              <img src="/images/1.jpg" alt="" />
            </div>
          </Col>
          <Col lg={7}>
            <div className="content_box">
              <h1>Why You Hire Us?</h1>
              <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
              <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
              <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
              <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
              <p>Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
            </div>
            <div className={styles.awardBox}>
              <div className="award-image">
                <img src="/images/award.png" alt="Award" />
              </div>
              <div className="award-description">
                <h4 className="text-primary">Title award</h4>
                <h4>description</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        )
}