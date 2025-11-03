"use client"
import { Button, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from 'react-icons/hi2';
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Form from 'react-bootstrap/Form';
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function ModulesControls() {
    const { cid } = useParams();
    const router = useRouter();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);


    const handleAddAssignment = () => {
        router.push(`/Courses/${cid}/Assignments/new`);
    };
    // @ts-ignore
    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <div className="me-1 float-start">
                <InputGroup className="mb-3">
                    <InputGroupText><HiMagnifyingGlass/></InputGroupText>
                    <Form.Control type="text" defaultValue="Search..." />
                </InputGroup>
            </div>
            {isFaculty && (
                <div>
                <Button
                    variant="danger"
                    size="lg"
                    className="me-1 float-end"
                    id="wd-add-assignment-btn"
                    onClick={handleAddAssignment}
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>

                <Button
                variant="secondary"
                size="lg"
                className="me-1 float-end"
                id="wd-add-assignment-group-btn"
                >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>
                </div>
            )}
        </div>
    );
}

