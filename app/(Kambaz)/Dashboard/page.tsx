'use client';
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { enroll, unenroll } from "./reducer"; // new reducer
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as db from "../Database";
import {RootState} from "../store";
export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    // @ts-ignore
    const isFaculty = currentUser?.role === "FACULTY";
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

    const [showAllCourses, setShowAllCourses] = useState(false);
    const toggleShowAll = () => setShowAllCourses(!showAllCourses);
    const isEnrolled = (courseId: string) =>
        // @ts-ignore
        enrollments.some(e => e.user === currentUser?._id && e.course === courseId);
    const displayedCourses = showAllCourses
        ? courses // show all courses
        : courses.filter(course =>
            // @ts-ignore
            enrollments.some(e => e.user === currentUser?._id && e.course === course._id)
        );
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {!isFaculty && (
                <div className="float-end mb-2">
                    <Button variant="primary" onClick={toggleShowAll}>
                        {showAllCourses ? "My Courses" : "My Enrollments"}
                    </Button>
                </div>
            )}
            {isFaculty && (
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                                id="wd-add-new-course-click"
                                onClick={() => dispatch(addNewCourse(course))} > Add </button>
                        <button className="btn btn-warning float-end me-2"
                                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                            Update </button>
                    </h5>
                    <br />

                    <Form.Control value={course.name} className="mb-2"
                                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <Form.Control value={course.description}
                                  onChange={(e) => setCourse({ ...course, description: e.target.value }) }  />
                    <hr />
                </div>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {displayedCourses.map((course) => (
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                    <Card.Img src="/images/reactjs.webp" variant="top" width="100%" height={160} />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description} </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                        <Link href={`/Courses/${course._id}/Home`}
                                              className="wd-dashboard-course-link text-decoration-none text-dark" >
                                            <Button variant="primary"> Go </Button></Link>
                                        {isFaculty && (
                                            <div>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(deleteCourse(course._id));
                                                }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                        {!isFaculty && (
                                            <Button
                                                variant={isEnrolled(course._id) ? "danger" : "success"}
                                                onClick={() => isEnrolled(course._id)
                                                    // @ts-ignore
                                                    ? dispatch(unenroll({ user: currentUser?._id, course: course._id }))
                                                    // @ts-ignore
                                                    : dispatch(enroll({ user: currentUser?._id, course: course._id }))
                                                }
                                            >
                                                {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                                            </Button>
                                        )}
                                        </div>
                                    </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>);}