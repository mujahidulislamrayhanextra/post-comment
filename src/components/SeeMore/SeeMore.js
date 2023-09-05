import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './SeeMore.css'
const SeeMore = () => {
    const { SeeDetails } = useParams();
    const [more, setMore] = useState({});
    const [comments, setComment] = useState([])
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${SeeDetails}`)
            .then(res => res.json())
            .then(data => {
                setMore(data)

            })

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${SeeDetails}`)
            .then(res => res.json())
            .then(data => {
                setComment(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className='seemore'>
                <h1>{more.title}</h1>
                <p>{more.body}</p>
                <p>{more.userId}</p>
                <p>{more.id}</p>
            </div>
            <div>
                {
                    comments.map(comment => <Comment comment={comment}> </Comment>)
                }
            </div>

        </div>
    );
};

export default SeeMore;