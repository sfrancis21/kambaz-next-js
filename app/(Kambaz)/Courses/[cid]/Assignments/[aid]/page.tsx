import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div id="wd-css-responsive-forms-2">
                <Form>
                    <Row className="mb-3">
                        <Form.Label> Assignment Name </Form.Label>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={10}> <Form.Control id="wd-name" type="text" placeholder="A1" /> </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={10}>
                            <Form.Control as="textarea" style={{ height: "100px" }}
                                          placeholder={"The assignment is available online"}/>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label column sm={2}> Points </Form.Label>
                        <Col sm={10}> <Form.Control id="wd-points" type="text" placeholder="100" /> </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label column sm={2} id="wd-group"> Assignment Group </Form.Label>
                        <Col sm={10}>
                            <div id="wd-css-styling-dropdowns">
                                <Form.Select>
                                    <option value="0" defaultChecked>ASSIGNMENTS</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label column sm={2} id="wd-display-grade-as"> Display Grade as </Form.Label>
                        <Col sm={10}>
                            <div id="wd-css-styling-dropdowns">
                                <Form.Select>
                                    <option value="0" defaultChecked>Percentage</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label column sm={2}> Submission Type </Form.Label>
                        <Col sm={10}>
                            <fieldset className="border p-3 rounded mb-3">
                                <div id="wd-css-styling-dropdowns">
                                    <Form.Select>
                                        <option value="0" defaultChecked>Online</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <br/>
                                <Form.Label> <b>Online Entry Options</b> </Form.Label>
                                <Form.Check type="checkbox" label="Text Entry" name="formHorizontalRadios"
                                    id="wd-text-entry"/>
                                <Form.Check type="checkbox" label="Website URL" name="formHorizontalRadios"
                                            defaultChecked id="wd-website-url"/>
                                <Form.Check type="checkbox" label="Media Recordings" name="formHorizontalRadios"
                                    id="wd-media-recordings"/>
                                <Form.Check type="checkbox" label="Student Annotation" name="formHorizontalRadios"
                                    id="wd-student-annotation"/>
                                <Form.Check type="checkbox" label="File Uploads" name="formHorizontalRadios"
                                    id="wd-file-upload"/>
                            </fieldset>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label column sm={2}> Assign </Form.Label>
                        <Col sm={10}>
                            <fieldset className="border p-3 rounded mb-3">
                                <Form.Label column sm={2}> <b>Assign</b> </Form.Label>
                                <Col sm={10}> <Form.Control id="wd-assign-to" type="text" placeholder="Everyone" /> </Col><br/>
                                <Form.Label> <b>Due</b> </Form.Label>
                                <Form.Control id="wd-due-date" type="datetime-local" defaultValue="2024-05-06T23:59"/><br/>
                                    <Row>
                                        <Col>
                                            <Form.Label> <b>Available from</b> </Form.Label>
                                            <Form.Control id="wd-available-from" type="datetime-local" defaultValue="2024-05-06T00:00"/>
                                        </Col>
                                        <Col>
                                            <Form.Label> <b>Until</b> </Form.Label>
                                            <Form.Control id="wd-available-until" type="datetime-local"/>
                                        </Col>
                                    </Row>
                            </fieldset>
                        </Col>
                    </Row>
                    <Col> <Button type="submit">Sign in</Button> </Col>
                </Form>
            </div>
        </div>
    );}