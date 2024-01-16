import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from './Footer.module.scss';
import { BsFacebook, BsYoutube, BsTwitterX } from 'react-icons/bs';

export default function Footer() {
  return (
    <Container className={styles.footer}>
      <Row>
        <Col>
          <div className={styles.gapLine}></div>
        </Col>
      </Row>
      <Row className={styles.content}>
        <Col md={6}>
          <div>
            <a href="/contact">
              Contact
            </a>
            <p>dvdai63@gmail.com</p>
            <div className={styles.social}>
              <a href="#">
                <BsFacebook fontSize="large" />
              </a>
              <a href="#">
                <BsYoutube fontSize="large" />
              </a>
              <a href="#">
                <BsTwitterX fontSize="large" />
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <p className="text-primary">Subscribe</p>
          <InputGroup className="m-3 px-5">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}