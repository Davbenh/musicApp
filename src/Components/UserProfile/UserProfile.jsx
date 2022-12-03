import React from 'react'
import './userProfile.css';
import { useContext } from 'react';
import { LoggedInStatus } from '../../App';

function UserProfile(props) {
  const {myUser} = useContext(LoggedInStatus);

  return (
    <div className='userProfile'>
        <img src="./images/userProfile.png" alt="userNameImg"/>
        <span className="hellouser">ברוך הבא,  {myUser}</span>
    </div>
  )
}

export default UserProfile