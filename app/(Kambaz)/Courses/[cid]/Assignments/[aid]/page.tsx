"use client"
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();

    const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

    const existingAssignment = assignments.find(a => a._id === aid);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        if (existingAssignment) {
            setTitle(existingAssignment.title);
            setDescription(existingAssignment.description);
            setPoints(existingAssignment.points);
            setAvailableFrom(existingAssignment.available_date);
            setDueDate(existingAssignment.due_date);
        }
    }, [existingAssignment]);

    const handleSave = () => {
        if (existingAssignment) {
            dispatch(updateAssignment({
                _id: existingAssignment._id,
                title,
                description,
                points,
                available_date: availableFrom,
                due_date: dueDate
            }));
        } else {
            dispatch(addAssignment({
                title,
                description,
                points,
                available_date: availableFrom,
                due_date: dueDate,
                course: cid
            }));
        }
        router.push(`/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        router.push(`/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <Form>
                <Row className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" value={description} onChange={e => setDescription(e.target.value)} style={{height: "100px"}}/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Label>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={points} onChange={e => setPoints(e.target.value)} />
                    </Col>
                </Row>
                <Form.Label className="mb-1">Assign</Form.Label>
                <fieldset className="border p-3 rounded mb-3">
                    <Row className="mb-3">
                        <Col sm={4}>
                            <Form.Label>Due</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                defaultValue={dueDate}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={6}>
                            <Form.Label>Available From</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                defaultValue={availableFrom}
                            />
                        </Col>
                        <Col sm={6}>
                            <Form.Label>Available Until</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                defaultValue={""}
                            />
                        </Col>
                    </Row>
                </fieldset>
                <Row>
                    <Col>
                        <button type="button" className="btn btn-danger me-2" onClick={handleSave}>
                            Save
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                            Cancel
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
