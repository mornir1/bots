import React from 'react';

export default ({id,first_name,last_name,email,country,description,avatar=""})=> {
        
        avatar = avatar.replace(/80x80/,'300x300')

		return (
                    <div className="profile-box">
                        <div className="profile-image-box " >
                                <img src={avatar} />
                        </div>
                        <div className="profile-details-box">
                            <h2 className="profile-title">{first_name} {last_name}</h2>
                            <span className="grad-line mt20"/>
                            <h5 className="profile-detail mt20">id: {id}</h5>
                            <h5 className="profile-detail">country: {country}</h5>
                            <h5 className="profile-detail">email: {email}</h5>
                            <p className="profile-description mt20">{description}</p>
                        </div>
                    </div>
                )	
}
