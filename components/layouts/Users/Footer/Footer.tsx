import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from './Footer.module.scss';
import { BsFacebook, BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <Row className={styles.content}>
        <Col md={6}>
          <div>
            <a href="/contact">
              <p>Contact</p>
            </a>
            <p>dvdai63@gmail.com</p>
            <div className={styles.social}>
              <a href="#">
                <BsFacebook fontSize="large" />
                <span className="ps-2">Facebook</span>
              </a>
              <a href="#">
                <BsYoutube fontSize="large" />
                <span className="ps-2">Youtube</span>
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <p className="text-primary w-75">Subscribe</p>
          <InputGroup className="m-3 px-5 w-75">
            <Form.Control
              placeholder="Your email"
              aria-label="Your email"
              aria-describedby=""
            />
            <Button variant="primary" id="button-addon2">
              subscribe
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}