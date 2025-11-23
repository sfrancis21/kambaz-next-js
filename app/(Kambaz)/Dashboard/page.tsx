'use client';
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses} from "../Courses/reducer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { enroll, unenroll, setEnrollments } from "./reducer";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as client from "../Courses/client";
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
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

    // @ts-ignore
    const isFaculty = currentUser?.role === "FACULTY";
    const [showAllCourses, setShowAllCourses] = useState(false);
    const toggleShowAll = () => setShowAllCourses(!showAllCourses);
    const isEnrolled = (courseId: string) => {
        if (!userId) return false;
        return enrollments.some((e: { user: any; course: string; }) => e.user === userId && e.course === courseId);
    };
    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([ ...courses, newCourse ]));
    };
    const onDeleteCourse = async (courseId: string) => {
        const status = await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    };
    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })));};
    const userId = (currentUser as any)?._id;

    const handleEnroll = async (courseId: string) => {
        if (!currentUser) return;
        const enrollment = await client.enrollUserInCourse(
            userId,
            courseId
        );
        dispatch(enroll(enrollment));
    };

    const handleUnenroll = async (courseId: string) => {
        if (!currentUser) return;
        await client.unenrollUserFromCourse(userId, courseId);
        dispatch(unenroll({ user: userId, course: courseId }));
    };

    const fetchCourses = async () => {
        try {
            if(showAllCourses) {
                const courses = await client.fetchAllCourses();
                dispatch(setCourses(courses));
            } else {
                const courses = await client.findMyCourses();
                dispatch(setCourses(courses));
            }
        } catch (error) {
            console.error(error);
        }
    };
    const fetchEnrollments = async () => {
        if (!userId) return;
        const data = await client.findEnrollmentsForUser(userId);
        dispatch(setEnrollments(data));
    };

    useEffect(() => {
        fetchCourses();
        fetchEnrollments();
    }, [showAllCourses, currentUser]);

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
                                onClick={onAddNewCourse} > Add </button>
                        <button className="btn btn-warning float-end me-2"
                                onClick={onUpdateCourse} id="wd-update-course-click">
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
                    {courses.map((course) => (
                        <Col  key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
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
                                                    onDeleteCourse(course._id);
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
                                        {!isFaculty && showAllCourses && (
                                            <Button
                                                variant={isEnrolled(course._id) ? "danger" : "success"}
                                                onClick={() => isEnrolled(course._id)
                                                    // @ts-ignore
                                                    ? handleUnenroll(course._id)
                                                    // @ts-ignore
                                                    : handleEnroll(course._id)
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