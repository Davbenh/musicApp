import React from 'react'
import './userProfile.css';
import { useContext } from 'react';
import { LoggedInStatus } from '../../App';

function UserProfile(props) {
  const {myUser} = useContext(LoggedInStatus);

  return (
myUser ? (    <div className='userProfile'>
<img src="./images/userProfile.png" alt="userNameImg"/>
<span className="hellouser"> 
ברוך הבא,{myUser.fName}</span>
</div>) : (
    <div className='userProfile'>
    <img src="./images/userProfile.png" alt="userNameImg"/>
    <span className="hellouser"> 
    ברוך הבא,אורח</span>
</div>
)


  )
}

export default UserProfile