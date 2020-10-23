import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, createPost, updatePost } from '../store/actions/posts.actions';

function PostInputs(props) {
    const post = useSelector(state => state.posts.post);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { userId, id } = props.match.params;

    const dispatch = useDispatch();

    const handleTitleChange = (event)=>{
        setTitle(event.target.value)
    }
    const handleBodyChange = (event)=>{
        setBody(event.target.value)
    }
    useEffect(() => {
        if (post && id !== 'new') {
            setTitle(post.title);
            setBody(post.body);
        }    
    }, [post]);
    useEffect(() => {
        if (id !== 'new') {
            dispatch(getPost(id))
        }
    }, []);

    const savePost = () => {
        if (id === 'new') {
            dispatch(createPost({
                userId,
                title,
                body
            }));
        } else {
            dispatch(updatePost(id, {
                userId,
                title,
                body
            }));
        }
    };

    return(
        <div className='layout-wrapper'>
            <div>
                <input className="input" placeholder='Title' value={title} onChange={handleTitleChange}/>
            </div>
            <div>
                <textarea className="textarea" placeholder='Body' value={body} onChange={handleBodyChange}/>
            </div>
            
            <button className="button" onClick={savePost} disabled={!title || !body}>Save</button>
        </div>
    );
};

export default PostInputs;