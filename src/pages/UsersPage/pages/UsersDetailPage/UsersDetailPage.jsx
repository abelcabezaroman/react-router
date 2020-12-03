import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../../../../shared/consts/users';

export default function UsersDetailPage() {

    const { idUser } = useParams();

    return (
        <div>
            {users.map((user, index) => {
                if (user.id === Number(idUser)) {
                    return <div key={index}>
                        <p>{user.name}</p>
                        <p>{user.role}</p>
                    </div>
                } else {
                    return null
                }
            })}
        </div>
    )
}