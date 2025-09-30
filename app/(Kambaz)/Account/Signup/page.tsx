import Link from "next/link";
import Form from 'react-bootstrap/Form';

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h1>Sign Up</h1>
            <Form.Control id="wd-username"
                          placeholder="username"
                          className="mb-2"/>
            <Form.Control id="wd-password"
                          placeholder="password" type="password"
                          className="mb-2"/>
            <Link id="wd-signin-btn"
                  href="/Account/Profile"
                  className="btn btn-primary w-100 mb-2">
                Sign up </Link>
            <Link id="wd-signup-link" href="/Account/Signin">Sign in</Link>
        </div>

    );}
