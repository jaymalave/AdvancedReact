import React from 'react';

const Movie = (props) => {
    console.log('recieved');
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>${props.price}</h3>
        </div>
    )
}

export default Movie;