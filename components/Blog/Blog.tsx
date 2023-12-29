import React from 'react';
import styles from './Blog.module.scss';
import Hero from 'components/share/Hero/Hero';
import { Col, Container, Row } from 'react-bootstrap';
import RightSide from './RightSide/RightSide';
import BlogList from './BlogList/BlogList';

function Blog() {
  return (
    <section>
      <Hero />
      <Container>
        <Row>
          <Col lg={8}>
            <BlogList />
          </Col>
          <Col lg={4}>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;