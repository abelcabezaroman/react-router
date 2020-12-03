import React from 'react';
import { useLocation, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import { users } from '../../../../shared/consts/users';

export default function UsersDetailPage() {

    const { idUser } = useParams();

    const history = useHistory();
    console.log('useRouteMatch', useRouteMatch())
    console.log('useLocation', useLocation())
    console.log('useHistory', useHistory())


    return (
        <div>
            {/* <button onClick={useHistory().goBack}>Go back</button> //MAL */}
            <button onClick={() => {history.push('/users')}}>Go back</button>
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