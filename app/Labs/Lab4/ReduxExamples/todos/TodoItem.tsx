import Button from "react-bootstrap/Button";
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
// @ts-ignore
export default function TodoItem({ todo })
 {
    const dispatch = useDispatch();
    return (
        <ListGroupItem key={todo.id}>
            <Row className="align-items-center">
                <Col>
                    {todo.title}
                </Col>
                <Col ClassName="d-flex gap-2">
                <Button onClick={() =>  dispatch(deleteTodo(todo.id))}
                        id="wd-set-todo-click"> Edit </Button>
                <Button variant="danger" onClick={() =>dispatch(deleteTodo(todo.id))}
                        id="wd-delete-todo-click"> Delete </Button>
                </Col>
            </Row>
        </ListGroupItem>);}