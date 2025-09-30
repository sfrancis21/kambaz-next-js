import Link from "next/link";
import Form from 'react-bootstrap/Form';

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <Form.Control id="wd-username"
                          placeholder="username"
                          className="mb-2" defaultValue="alice"/>
            <Form.Control id="wd-password"
                          placeholder="password" type="password"
                          className="mb-2" defaultValue="123"/>
            <Form.Control id="wd-firstname"
                          defaultValue="Alice"
                          className="mb-2"/>
            <Form.Control id="wd-lastname"
                          defaultValue="Wonderland"
                          className="mb-2"/>
            <Form.Control id="wd-dob"
                          type="date"
                          className="mb-2"/>
            <Form.Control id="wd-email"
                          defaultValue="alice@wonderland.com"
                          className="mb-2"/>
            <Form.Control id="wd-user"
                          defaultValue="User"
                          className="mb-2"/>
            <Link id="wd-signin-btn"
                  href="/Account/Signin"
                  className="btn btn-danger w-100 mb-2 danger">
                Sign out </Link>
        </div>

    );}
