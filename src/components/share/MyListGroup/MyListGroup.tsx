import { ListGroup } from "react-bootstrap";
import Item from "./Item/Item";

export default function MyListGroup() {
  return (
    <ListGroup as="ol">
      <Item count={0} />
      <Item count={1} level={1}/>
      <Item count={0} />
      <Item count={0} />
    </ListGroup>
  )
}