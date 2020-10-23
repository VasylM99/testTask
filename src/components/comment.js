import React from 'react';
import './style.css';

function Comment(props) {
    return (
        <div className="wrapper">
            <div className="main">
                <div className="comment-header">
                    <div>{props.name}</div>
                    <div>{props.email}</div>
                </div>

                <div className="content-text">{props.body}</div>
            </div>
        </div>
    );
}

export default Comment;