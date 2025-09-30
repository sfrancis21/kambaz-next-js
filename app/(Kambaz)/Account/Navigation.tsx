import Link from "next/link";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation"  className="wd list-group fs-5 rounded-0">
            <ul className="list-unstyled">
                <li>
                    <Link href="Signin"
                          className="list-group-item active border-0 ">Signin</Link>
                </li>
                <li>
                    <Link href="Signup"
                          className="list-group-item text-danger border-0">Signup
                    </Link>
                </li>
                <li>
                    <Link href="Profile"
                          className="list-group-item text-danger border-0">Profile
                    </Link>
                </li>
            </ul>
        </div>
    );}
