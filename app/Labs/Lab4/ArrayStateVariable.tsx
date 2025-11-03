import { useState } from "react";
import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { RootState } from "./store";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    const { todos } = useSelector((state: RootState) => state.todosReducer);
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <Button variant="success" onClick={addElement}>Add Element</Button>
            <ul>
                {array.map((item, index) => (
                    <ListGroup>
                        <ListGroupItem key={index}> <h2>{item} <Button variant="danger" className="float-end" onClick={() => deleteElement(index)}>
                            Delete</Button>
                        </h2>

                            {todos.map((todo: any) => (
                                <ListGroupItem key={todo.id}>
                                    {todo.title}
                                </ListGroupItem>
                            ))}

                    </ListGroupItem>
                    </ListGroup>))}
            </ul><hr/></div>);}