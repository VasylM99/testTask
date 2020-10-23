import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Post(props) {
    return (
        <div className="wrapper">
            <div className="main">
                <div className="title">{props.title}</div>
                <div className="content-text">{props.body}</div>
                <div>
                    <Link className="button" to={`/users/${props.userId}/posts/${props.id}/comments`}>Details</Link>
                </div>
            </div>
        </div>
    );
}

export default Post;