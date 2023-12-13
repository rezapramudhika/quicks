import React from 'react';
import './index.scss';

const Loader = (props) => {
    return (
        <div className='loaderContainer'>
            <div className='loader'></div>
            <p className='loaderText'>{props.loadingText}</p>
        </div>
    );
}

export default Loader;