import React from 'react';
import User from './User'
import {users} from '../usersData'


const Users = () => {
    const usersData = users.map((user)=> <User key={user.id} userImg={user.imgUrl} email={user.email} username={user.username} />)
    console.log(usersData);
    return (
        <div>
        {usersData}
           
        </div>
    )

}

export default Users 