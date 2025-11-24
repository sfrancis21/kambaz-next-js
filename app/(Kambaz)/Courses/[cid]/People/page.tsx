"use client"; // needed because we are using state and client components

import { useEffect, useState } from "react";
import PeopleTable from "./Table";
import * as client from "../../client";
import { useParams } from "next/navigation";

export default function UsersPage() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        const data = await client.findUsersForCourse(cid as string);
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