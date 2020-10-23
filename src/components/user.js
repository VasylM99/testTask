import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function User(props) {

    return (
        <div className="wrapper">
            <div className="main">
                <div className="user">
                    <span className="user-info w-25">{props.name}</span>
                    <span className="user-info w-25">{props.username}</span>
                    <span className="user-info w-25"> {props.email}</span>
                    <span className="w-25 right">
                        <Link className="button" to={`/users/${props.id}/posts`}>Posts</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default User;