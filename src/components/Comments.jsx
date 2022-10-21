import React, { useEffect, useState } from 'react'

const Comments = ({ postID, data }) => {
    const [showAll, setShowAll] = useState(false);
    const [showComments, setShowComments] = useState([]);

    const currentComments = data.filter(e => {
        return e.postId === postID;
    });

    useEffect(() => {
        if(showAll) {
            setShowComments(currentComments)
        } else setShowComments(currentComments.slice(0, 3))
    }, [showAll]);

    return (
        <div>
            {data && showComments && showComments.map((e, i) => {
                return <p key={i}>{i + 1}: {e.body}</p>
            })}
            <button onClick={() => setShowAll(!showAll)}>show all</button>
        </div>
    )
}

export default Comments