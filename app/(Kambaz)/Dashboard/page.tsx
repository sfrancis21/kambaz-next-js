import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.webp" width={200} height={150} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5015" className="wd-dashboard-course-link">
                        <Image src="/images/5015.webp" width={200} height={150} />
                        <div>
                            <h5> CS5015 </h5>
                            <p className="wd-dashboard-course-title">
                                Data Structures
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5040" className="wd-dashboard-course-link">
                        <Image src="/images/5040.jpg" width={200} height={150} />
                        <div>
                            <h5> CS5040 </h5>
                            <p className="wd-dashboard-course-title">
                                Python Programming Design
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5105" className="wd-dashboard-course-link">
                        <Image src="/images/5105.webp" width={200} height={150} />
                        <div>
                            <h5> CS5105 </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5101" className="wd-dashboard-course-link">
                        <Image src="/images/5101.jpg" width={200} height={150} />
                        <div>
                            <h5> CS5101 </h5>
                            <p className="wd-dashboard-course-title">
                                Cybersecurity and IT
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5005" className="wd-dashboard-course-link">
                        <Image src="/images/5005.jpg" width={200} height={150} />
                        <div>
                            <h5> CS5005 </h5>
                            <p className="wd-dashboard-course-title">
                                Game Design with Unity
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5006" className="wd-dashboard-course-link">
                        <Image src="/images/5006.webp" width={200} height={150} />
                        <div>
                            <h5> CS5006 </h5>
                            <p className="wd-dashboard-course-title">
                                Game Design with Godot
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5202" className="wd-dashboard-course-link">
                        <Image src="/images/5202.jpg" width={200} height={150} />
                        <div>
                            <h5> CS5202 </h5>
                            <p className="wd-dashboard-course-title">
                                Psychology of Games
                            </p>
                            <button> Go </button> <br />
                        </div>
                    </Link>
                </div>
                <br />
            </div>
        </div>
    );}
