"use client"; // needed because we are using state and client components

import { useEffect, useState } from "react";
import PeopleTable from "./Table";
import * as client from "../../../Account/client";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        const data = await client.findAllUsers();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <PeopleTable users={users} fetchUsers={fetchUsers} />
        </div>
    );
}