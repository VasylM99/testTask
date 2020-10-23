import React, { useEffect } from 'react';
import Post from './post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/actions/posts.actions';
import { Link } from 'react-router-dom';

function Posts(props) {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts(props.match.params.id))
    }, [dispatch]);

    return (
        <div>
            <div className="right wrapper">
                <Link className="button" to={`/users/${props.match.params.id}/posts/new`}>Add post</Link>
            </div>

            {posts.map(post =>
                <Post
                    key={post.id}
                    id={post.id}
                    userId={props.match.params.id}
                    body={post.body}
                    title={post.title}
                />
            )}
        </div>
    );
};

export default Posts;