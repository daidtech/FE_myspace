import Hero from 'src/components/share/Hero/Hero';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Content from './Content/Content';
import RightSide from './RightSide/RightSide';
import List from './List/List';
import { BlogTypes } from 'models/Blog';

type BlogDetailProps = {
  type: BlogTypes
}

export default function Blog({type}: Readonly<BlogDetailProps>) {
  return (
    <section>
      <Hero />
      <Container>
        <Row>
          <Col lg={8}>
            { type==BlogTypes.Index ?  <List /> : <Content/>}
          </Col>
          <Col lg={4}>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </section>
  )
}