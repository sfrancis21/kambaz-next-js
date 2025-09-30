import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Form from 'react-bootstrap/Form';

export default function ModulesControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <div className="me-1 float-start">
                <InputGroup className="mb-3">
                    <InputGroupText><HiMagnifyingGlass/></InputGroupText>
                    <Form.Control type="text" defaultValue="Search..." />
                </InputGroup>
            </div>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
        </div>
    );}
