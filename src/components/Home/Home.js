import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Home.css'
import NewsImg from '../NewsImg/NewsImg';


const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [newsimgs, setNewsimgs] = useState([]);




  useEffect(() => {


    //post fetching

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)

      }
      )

    //newsImg fetching


    fetch('https://api.unsplash.com/search/photos?page=3&per_page=40&quantity=100&query=news&client_id=jkEghlz6rpIvacBXoOnd8NqIT8cdUnlXKcW1A_VQ3K4')
      .then(res => res.json())
      .then(data => {

        setNewsimgs(data.results)

      })

  }, [])

  return (
    <div className='home'>


      <h1>Hi:{posts.length}</h1>
      <div className='postStyle'>

        {
          posts.map(post => <Post post={post}></Post>)
        }

        {
          newsimgs.map(newsimg => <Post newsimg={newsimg}></Post>)
        }

        {/* {
    newsimgs.map( newsimg => <NewsImg newsimg={newsimg}></NewsImg>)
  } */}




      </div>
    </div>
  );
};

export default Home;