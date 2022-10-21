import axios from 'axios'
import '../assets/Posts.css'
import React, { useEffect, useState } from 'react'
import DisplayPosts from './DisplayPosts';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [maxPages,setMaxPages] = useState();
    const [currentPage,setCurrentPage] = useState(1);
    const [displayPosts,setDisplayPosts] = useState();

    const getPosts = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const postsData = await res.data
        setPosts(postsData)
        setMaxPages(postsData.length / 20)
    }

    const dividePosts = (index, arr) => {
        const parted = arr.map((e, i) => {
            if(i % 20 === 0) {
                return arr.slice(i, i + 20)
            }
        });

        const filtered = parted.filter(e => {
            return e !== undefined;
        })

        return filtered[index - 1];
    }

    useEffect(() => {
        getPosts()
    },[])

    useEffect(() => {
        const currentPosts = dividePosts(currentPage, posts);
        setDisplayPosts(currentPosts)
    }, [posts, currentPage]);
    
    const handleIncreasePaginate = () => {

        if(currentPage < maxPages){
            setCurrentPage((prev) => prev + 1)
        }
    }

    const handleDecreasePaginate = () => {
        if(currentPage > 1){
            setCurrentPage((prev) => prev - 1)
        }
    }
  return (
    <div className='posts-wrapper'>

        <DisplayPosts displayposts = {displayPosts}/>

        <div className='pagination-wrapper'>
            <span onClick={handleDecreasePaginate}>-</span>
            <span>{currentPage}</span>
            <span>{maxPages}</span>
            <span onClick={handleIncreasePaginate}>-</span>
        </div>
    </div>
  )
}

export default Posts