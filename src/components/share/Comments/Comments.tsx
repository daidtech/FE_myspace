import { Button, Form, InputGroup } from "react-bootstrap";
import Comment from "../Comment/Comment";

export default function Comments() {
  return (
    <>
      <h4 className="mt-5">Comments</h4>
      <Comment isSubComment={false}/>
      <Comment isSubComment={true}/>
      <Comment isSubComment={false}/>
      <InputGroup className="mb-3 w-50">
        <Form.Control
          placeholder="Your message"
          aria-label="Your message"
          aria-describedby="messgae"
        />
        <Button variant="primary" id="submit">
          Reply
        </Button>
      </InputGroup>
    </>
  )
}