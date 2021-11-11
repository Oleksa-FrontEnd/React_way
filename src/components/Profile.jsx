import React from "react";
import './Profile.css';
import imageSrc from "../images/military-banner.jpg";

const Profile = () => {
    return (
            <div className='content'> Main content
                <div className='content-banner'>
                    <img src={imageSrc} className='img-banner'/>
                </div>
                <div>ava + desription</div>
                <div>My posts</div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
    );
}

export default Profile;