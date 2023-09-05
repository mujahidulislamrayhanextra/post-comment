import React from 'react';

const NewsImg = (props) => {
    console.log(props.newsimg)
    const { urls } = props.newsimg;
    return (
        <div className='imgNews'>

            <img src={urls.raw} alt=";ji" />

        </div>
    );
};

export default NewsImg;