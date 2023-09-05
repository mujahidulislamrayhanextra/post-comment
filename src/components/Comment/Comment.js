import React from 'react';

const Comment = (props) => {
    const { name, body, email } = props.comment;
    return (
        <div>
            <h5>{name}</h5>
            <p>
                {body}
            </p>
        </div>
    );
};

export default Comment;