import Link from "next/link";
export default function CourseNavigation() {
    return (
        <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">
            <ul className="list-unstyled">
                <li>
                    <Link href="/Courses/1234/Home" id="wd-course-home-link"
                          className="list-group-item active border-0 ">Home</Link>
                </li>
                <li>
                    <Link href="/Courses/1234/Modules" id="wd-course-modules-link"
                          className="list-group-item text-danger border-0">Modules
                    </Link>
                </li>
                <li>
                    <Link href="https://piazza.com/" id="wd-course-piazza-link"
                          className="list-group-item text-danger border-0">Piazza</Link>
                </li>
                <li>
                    <Link href="https://www.zoom.com/" id="wd-course-zoom-link"
                          className="list-group-item text-danger border-0">Zoom</Link>
                </li>
                <li>
                    <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link"
                          className="list-group-item text-danger border-0">Assignments</Link>
                </li>
                <li>
                    <Link href="/Courses/1234/Quizzes" id="wd-course-assignments-link"
                          className="list-group-item text-danger border-0">Quizzes
                    </Link>
                </li>
                <li>
                    <Link href="/Courses/1234/Grades" id="wd-course-grades-link"
                          className="list-group-item text-danger border-0">Grades</Link>
                </li>
                <li>
                    <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
                          className="list-group-item text-danger border-0">People</Link>
                </li>
            </ul>
        </div>
    );
}
