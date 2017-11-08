import React from 'react';

export default ( {image_url} ) => {
    return (
        <div className="thumb-box">
		      <img className="thumb" src={image_url}/>
	    </div>
    )
}