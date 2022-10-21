import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Author from './Author';

const DisplayPosts = ({displayposts}) => {
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        const usersData = await res.data
        setUsers(usersData)
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <section>
        {
            displayposts && 
            <div className='postsWrapper'>
                {
                displayposts.map((element,i) => {
                    return (
                        <div key={i}>
                            <p onClick={() => navigate(`/post/${element.id}`)}>{element.title}</p>
                            <Author id={element.userId} user={users}/>
                        </div>
                    )
                })                
                }
            </div>
        }

    </section>
  )
}

export default DisplayPosts