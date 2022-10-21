import axios from 'axios';
import React, { useEffect } from 'react'

const Author = ({id,user,type}) => {

    const author = user.filter(e => {
        return e.id === id
    })
    
    if(type === "detailed") {
        return (
        <>
            {
                user &&
                author.map(e => {
                    return (
                        <>
                            <p className="author">{e.name}</p>
                            <p>{e.email}</p>   
                        </>
                        )
                    })
                }
        </>
    )} else {
        return (
            <>
            {   user&&
                author.map(e => {
                    return (
                        <>
                            <p className='author'>{e.name}</p>
                        </>
                    )
                })
            }
        </>
        )
}
}

export default Author