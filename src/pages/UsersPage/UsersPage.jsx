import React from 'react';
import { users } from '../../shared/data/users';

export default function HomePage() {

    return (
        <ul>
            {users.map((user,index) => <li key={index}>{user.name}</li>)}
        </ul>
    )
}