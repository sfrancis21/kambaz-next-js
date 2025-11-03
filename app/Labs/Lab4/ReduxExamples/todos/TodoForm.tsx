import Button from "react-bootstrap/Button";
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(){
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroupItem>
            <Row className="align-items-center">
                <Col>
                    <Form.Control value={todo.title}
                                  onChange={ (e) =>dispatch(setTodo({ ...todo, title: e.target.value }))}/>
                </Col>
                <Col ClassName="d-flex gap-2">
                    <Button variant="warning" onClick={() =>  dispatch(updateTodo(todo))}
                            id="wd-update-todo-click"> Update </Button>
                    <Button variant="success" onClick={() => dispatch(addTodo(todo))}
                            id="wd-add-todo-click"> Add </Button>
                </Col>
            </Row>

        </ListGroupItem>
    );}
