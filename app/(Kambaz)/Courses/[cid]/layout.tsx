"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";
import {RootState} from "../../store";
import { Button } from "react-bootstrap";
import { useState } from "react";
export default function CoursesLayout({ children }: { children: ReactNode }) {
    const [showNav, setShowNav] = useState(true);
    const { cid } = useParams();
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const course = courses.find((course: any) => course._id === cid);

    return (
        <div id="wd-courses">
            <h2>
                <Button
                    variant="link"
                    className="me-3"
                    onClick={() => setShowNav(!showNav)}
                >
                    <FaAlignJustify className="me-4 fs-4 mb-1 text-danger" />
                </Button>
                {course?.name}
            </h2>
            <hr />
            <div className="d-flex">
                {showNav &&
                    <div>
                    <CourseNavigation cid={cid} />
                    </div>
                }
                <div className="flex-fill">{children}</div>
            </div>
        </div>
    );
}

