import React from 'react';
import { users } from '../../shared/consts/users';

export default function UsersPage() {

    return (
        <ul>
            {users.map((user,index) => <li key={index}>{user.name}</li>)}
        </ul>
    )
}