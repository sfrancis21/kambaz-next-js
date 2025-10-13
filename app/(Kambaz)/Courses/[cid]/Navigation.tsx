"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { courses } from "../../Database";
export default function CourseNavigation({ cid }: {cid: string}) {
    const pathname = usePathname();
    const course = courses.find((course) => course._id === cid);
    const links = [
        {label: "Home", path: `/Courses/${course?._id}/Home`},
        {label: "Modules", path: `/Courses/${course?._id}/Modules`},
        {label: "Piazza", path: "https://piazza.com/"},
        {label: "Zoom", path: "https://www.zoom.com/"},
        {label: "Assignments", path: `/Courses/${course?._id}/Assignments`},
        {label: "Quizzes", path: `/Courses/${course?._id}/Quizzes`},
        {label: "Grades", path: `/Courses/${course?._id}/Grades`},
        {label: "People", path: `/Courses/${course?._id}/People/Table`},
    ];
    return (
        <ListGroup id="wd-courses-navigation"  className="wd list-group fs-5">
            {links.map((link) => (
                <ListGroupItem key={link.path} as={Link} href={link.path} active={pathname === link.path}
                               className={`list-group-item border-0
                            ${pathname === link.path ? "text-black" : "text-danger"}`}>
                    <br />
                    {link.label}
                </ListGroupItem>
                ))}
        </ListGroup>
    );
}
