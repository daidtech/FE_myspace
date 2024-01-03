import { ListGroup } from "react-bootstrap";
import Item from "./Item/Item";

export default function MyListGroup() {
  return (
    <ListGroup as="ol">
      <Item />
      <Item />
      <Item />
      <Item />
    </ListGroup>
  )
}