import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewsImg from '../NewsImg/NewsImg';

const Post = (props) => {


  const { title, userId, id } = props.post;
  // const { urls } = props.neswsImg;


  useEffect(() => {



  }, [])

  return (
    <div className='post'>




      <h2>{title}</h2>
      <p>{userId}</p>
      <p>{id}</p>
      <Link to={`/SeeMore/${id}`}>
        <button >See More</button>
      </Link>

    </div>
  );
};

export default Post;