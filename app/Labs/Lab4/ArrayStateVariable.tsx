import { useState } from "react";
import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { RootState } from "./store";

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
            <button onClick={addElement}>Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}> {item}
                        <button onClick={() => deleteElement(index)}>
                            Delete</button>
                        <ListGroup>
                            {todos.map((todo: any) => (
                                <ListGroupItem key={todo.id}>
                                    {todo.title}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        <hr />

                    </li>))}
            </ul><hr/></div>);}