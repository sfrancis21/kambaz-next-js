"use client"
import Link from "next/link";
import ModulesControls from "../Assignments/ModulesControls";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import LessonControlButtons from "../Assignments/LessonControlButtons";
import ModuleControlButtons from "../Assignments/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoNewspaper } from 'react-icons/io5';
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../store";
import { addAssignment, deleteAssignment, updateAssignment, setAssignments } from "./reducer";
import * as client from "../../client";

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const fetchAssignments = async() => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    const onRemoveAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(setAssignments(assignments.filter((m: any) => m._id !== assignmentId)));
    };

    const handleDelete = (assignmentId: string) => {
        if (confirm("Are you sure you want to delete this assignment?")) {
            onRemoveAssignment(assignmentId);
        }
    };
    useEffect(() => {
        fetchAssignments();
    }, []);


    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    // @ts-ignore
    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div id="wd-assignments">
            <ModulesControls />
            <br /><br /><br /><br />

            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-assignment-list rounded-0">
                        {assignments
                            .map((assignment) => (
                                <ListGroupItem key={assignment._id} className="wd-lesson wd-assignment-list-item p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="flex-shrink-0">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <IoNewspaper className="me-2 fs-3 text-success" />
                                        </div>
                                        <div>
                                            {isFaculty ? (
                                                <Link
                                                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                                                    className="wd-assignment-link text-dark d-block fw-bold text-decoration-none"
                                                >
                                                    {assignment.title}
                                                </Link>
                                            ) : (
                                                <span className="wd-assignment-link text-dark d-block fw-bold text-decoration-none">
                                                    {assignment.title}
                                                </span>
                                            )}

                                            <p>
                                                <span className="text-danger">Multiple Modules</span> | <b>Not available until </b>
                                                {new Date(assignment.available_date).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                                {" "} | <b>Due </b>
                                                {new Date(assignment.due_date).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                                {" "} | {assignment.points} pts
                                            </p>
                                        </div>
                                        {isFaculty && (
                                            <div className="flex-shrink-0 d-flex align-items-center">
                                                <LessonControlButtons />
                                                <button
                                                    className="btn btn-sm btn-danger ms-2"
                                                    onClick={() => handleDelete(assignment._id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )
                                        }
                                    </div>
                                </ListGroupItem>
                            ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}
