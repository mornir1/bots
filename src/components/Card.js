import React, { Component } from 'react';
import Thumb from './Thumb';


export default ( {first_name,country,description,avatar} ) => {
    return (
        <div className="card">
      		<Thumb image_url={avatar}/>
      		<div className="texts-box">
      			<h1 className="card-title paragraph">{first_name} from {country}</h1>
      			<p className="card-msg">{description}</p>
      		</div>
        </div>
    )
}
