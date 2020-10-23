import React, { useEffect } from 'react';
import Comment from './comment';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, getPost, deletePost } from '../store/actions/posts.actions';
import { Link } from 'react-router-dom';

function Comments(props) {
    const comments = useSelector(state => state.posts.comments);
    const { userId, id } = props.match.params;
    const post = useSelector(state => state.posts.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(id));
        dispatch(getComments(id));
    }, [dispatch]);
    const removePost = () => {
        dispatch(deletePost(id, userId));
    };

    return (
        <div>
            <div className="post">
                <div className="title">
                    {post.title}
                </div>
                <div className="content-text">
                    {post.body}
                </div>
                <div className="right">
                    <Link className="button" to={`/users/${userId}/posts/${id}`}>Edit</Link>
                    <button className="button" onClick={removePost}>DELETE</button>
                </div>
            </div>
            {comments.map(comment =>
                <Comment
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    email={comment.email}
                />
            )}
        </div>
    );
};

export default Comments;