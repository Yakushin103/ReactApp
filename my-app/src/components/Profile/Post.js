import React from 'react';

const Post = (props) => {
    const message = props.message;

    return (
        <div className="post">
            <img alt="Avatar" src="https://im0-tub-ru.yandex.net/i?id=1d9af1acd8beb09bba5f021b4e54a67a&n=13"/>
             {message} 
        </div>
    );
}

export default Post;