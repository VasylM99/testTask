import React, { useEffect } from 'react';
import User from './user';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/actions/users.actions';

function Users() {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    return users.map(user =>
        <User
            key={user.id}
            id={user.id}
            email={user.email}
            name={user.name}
            username={user.username}
        />

    )
};

export default Users;