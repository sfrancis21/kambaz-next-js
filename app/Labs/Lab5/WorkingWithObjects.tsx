"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "CS5610",
    });
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title </a>
            <Form.Control className="w-75" id="wd-assignment-title"
                         defaultValue={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })}/><br />

            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score </a>
            <Form.Control className="w-75" id="wd-assignment-title" type="number"
                          defaultValue={assignment.score} onChange={(e) =>
                setAssignment({ ...assignment, score: Number(e.target.value)})}/><br />

            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed </a>
            <Form.Check label="Completed" className="w-75" id="wd-assignment-title" type="checkbox"
                          checked={assignment.completed} onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked})}/><br />

            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description </a>
            <Form.Control className="w-50" id="wd-module-name"
                          defaultValue={module.description} onChange={(e) =>
                setModule({ ...module, description: e.target.value })}/><br />

            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name </a>
            <Form.Control className="w-75" id="wd-module-name"
                          defaultValue={module.name} onChange={(e) =>
                setModule({ ...module, name: e.target.value })}/>
            <hr />

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <a id="wd-retrieve-module" className="btn btn-primary"
               href={`${HTTP_SERVER}/lab5/module`}>
                Get Module
            </a><hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <a id="wd-retrieve-module-title" className="btn btn-primary"
               href={`${HTTP_SERVER}/lab5/module/name`}>
                Get Name
            </a>
            <hr/>
        </div>
    );}
