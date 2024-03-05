import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BsSearch, BsArrowRight } from 'react-icons/bs';


export default function SearchInput() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <BsSearch/>
      </InputGroup.Text>
      <Form.Control aria-label="Search" placeholder='Search...' />
      <InputGroup.Text>
        <BsArrowRight/>
      </InputGroup.Text>
    </InputGroup>
  )
}