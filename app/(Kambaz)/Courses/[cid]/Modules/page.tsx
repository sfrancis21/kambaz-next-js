"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import ModulesControls from "../Modules/ModulesControls";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import LessonControlButtons from "../Modules/LessonControlButtons"
import ModuleControlButtons from "../Modules/ModuleControlButtons"
import { BsGripVertical } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: RootState) => state.modulesReducer);
    const dispatch = useDispatch();



    return (
        <div>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
                dispatch(addModule({ name: moduleName, course: cid }));
                setModuleName("");
            }}/><br /><br /><br /><br />
            <ListGroup id="wd-modules" className="rounded-0">
                {modules
                    .filter((module) => module.course === cid)
                    .map((module) => (
                        <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!(module as any).editing && module.name}
                                { (module as any).editing && (
                                    <Form.Control className="w-50 d-inline-block"
                                                  onChange={(e) =>
                                                      dispatch(
                                                          updateModule({ ...module, name: e.target.value })
                                                      )
                                                  }

                                                  onKeyDown={(e) => {
                                                      if (e.key === "Enter") {
                                                          dispatch(updateModule({ ...module, editing: false }));
                                                      }
                                                  }}

                                                  defaultValue={module.name}/>
                                )}
                                <ModuleControlButtons moduleId={module._id}
                                                      deleteModule={(moduleId) => {
                                                          dispatch(deleteModule(moduleId));
                                                      }}
                                                      editModule={(moduleId) => dispatch(editModule(moduleId))} />


                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {module.lessons.map((lesson) => (
                                        <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                        </ListGroupItem>
                                    ))}</ListGroup>)}</ListGroupItem>))}</ListGroup>
        </div>
    );}