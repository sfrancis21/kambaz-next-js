'use client';
import Link from "next/link";
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/5015/Home"
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/5015.webp" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5015</Card.Title>
                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Data Structures</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link href="/Courses/5040/Home"
                                      className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/5040.jpg" width="100%" height={160}/>
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5040</Card.Title>
                                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            Python Programming Design</Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link href="/Courses/5105/Home"
                                          className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <Card.Img variant="top" src="/images/5105.webp" width="100%" height={160}/>
                                        <Card.Body>
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5105</Card.Title>
                                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                Algorithms</Card.Text>
                                            <Button variant="primary">Go</Button>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                    <Card>
                                        <Link href="/Courses/5101/Home"
                                              className="wd-dashboard-course-link text-decoration-none text-dark">
                                            <Card.Img variant="top" src="/images/5101.jpg" width="100%" height={160}/>
                                            <Card.Body>
                                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5101</Card.Title>
                                                <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                    Cybersecurity and IT</Card.Text>
                                                <Button variant="primary">Go</Button>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </Col>
                     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                        <Card>
                                            <Link href="/Courses/5005/Home"
                                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                                <Card.Img variant="top" src="/images/5005.jpg" width="100%" height={160}/>
                                                <Card.Body>
                                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5005</Card.Title>
                                                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                        Game Design with Unity</Card.Text>
                                                    <Button variant="primary">Go</Button>
                                                </Card.Body>
                                            </Link>
                                        </Card>
                                    </Col>
                     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                            <Card>
                                                <Link href="/Courses/5006/Home"
                                                      className="wd-dashboard-course-link text-decoration-none text-dark">
                                                    <Card.Img variant="top" src="/images/5006.webp" width="100%" height={160}/>
                                                    <Card.Body>
                                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5006</Card.Title>
                                                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                            Game Design with Godot</Card.Text>
                                                        <Button variant="primary">Go</Button>
                                                    </Card.Body>
                                                </Link>
                                            </Card>
                                        </Col>
                     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                                <Card>
                                                    <Link href="/Courses/5202/Home"
                                                          className="wd-dashboard-course-link text-decoration-none text-dark">
                                                        <Card.Img variant="top" src="/images/5202.jpg" width="100%" height={160}/>
                                                        <Card.Body>
                                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5202</Card.Title>
                                                            <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                                Psychology of Games</Card.Text>
                                                            <Button variant="primary">Go</Button>
                                                        </Card.Body>
                                                    </Link>
                                                </Card>
                                            </Col>
                </Row>

            </div>
        </div>
    );}
