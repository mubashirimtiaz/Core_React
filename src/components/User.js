import React from 'react';

const User = (props) => {
    return (
        <div>
            <img src={props.userImg} alt="user_img"/>
    <p>username: <span>{props.username}</span></p>
    <p>email: <span>{props.email}</span></p>
        </div>
    )

}

export default User;