import React from 'react';
import styles from './RightSide.module.scss';
import { Form, InputGroup, ListGroup } from 'react-bootstrap';
import WidgetTitle from 'components/share/WidgetTitle/WidgetTitle';
import MyListGroup from 'components/share/MyListGroup/MyListGroup';

function RightSide() {
  return (
    <section>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Search" placeholder='Search...' />
        <InputGroup.Text>#</InputGroup.Text>
      </InputGroup>
      <WidgetTitle title={'Category'}/>
      <MyListGroup />
    </section>
  );
}

export default RightSide;