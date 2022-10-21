import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/PostDetailed.css'
import Author from './Author'
import Comments from './Comments'


const PostDetailed = () => {
    const params = useParams();
    
    const [posts, setPosts] = useState([]);
    const [displayPost, setDisplayPost] = useState([]);
    const [comments,setComments] = useState([]);
    const [users, setUsers] = useState([])

    const getPosts = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const posts = await res.data;
        setPosts(posts);
    
    }

    const getComments = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        const comments = await res.data;
        setComments(comments)
    }

    const getUsers = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        const users = await res.data;
        setUsers(users);
    }

    useEffect(() => {
        getPosts();
        getComments();
        getUsers();
    }, []);

    const setPost = () => {
        const detailed = posts.filter(e => {
            if(e.id === parseInt(params.id)){
                return e 
            }
        });
        setDisplayPost(detailed);
    }
    useEffect(() => {
        setPost();
    }, [posts])

    console.log(comments);

    return (
        <div>{displayPost && displayPost.map(e => {
            return (
                <div className='post-detail-wrapper'>
                    <div className='person-information'>
                        <Author id={e.userId} user={users} type="detailed" />
                    </div>
                    <div className='detail-box'>
                        <h2>{e.title}</h2>
                        <p>{e.body}</p>
                    </div>
                    <div className='commentsWrapper'>
                        <Comments postID={e.id} data={comments} />
                    </div>
                </div>
            )
        })}</div>
    )
}

export default PostDetailed