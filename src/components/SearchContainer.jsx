import { useState } from 'react';
import {getUserApiUrl, getUserReposApiUrl} from '../ApiEndpoints'
import {UserInfo} from './UserInfo'
import './styles/serachForm.css'

const SearchContainer = function ({fetchUserDetails}) {
  const [userName, setUserName] = useState('');
  const [userJson, setUserJson] = useState('');
  function onSubmit (evt) {
    evt.preventDefault();
    let userDetailsUrl = getUserApiUrl(userName);
    let userReposUrl = getUserReposApiUrl(userName);
    Promise.all([fetchUserData(userDetailsUrl), fetchUserData(userReposUrl)]).then((values) => {
      let userData = {userDetails: values[0], repos:values[1]};
      console.log(userData);
      setUserJson(userData)
    });
  }
  function onUsernameChange(evt) {
    let value = evt.target.value;
    if(!value){
      setUserJson(undefined)
    }
    setUserName(value)
  }
  async function fetchUserData (url) {
    
    let response = await fetch(url);
    let responseOutput = await response.json();
    return responseOutput;
  }
  return (
    <>
      <h2>Search</h2>
      <div className="serachForm">
        <form>
          <label>Enter username</label>
          <input type="text" value={userName} onChange={onUsernameChange}/>
          <input type="submit" onClick={onSubmit}/>
        </form>
      </div>
      {(userJson && userName) && <UserInfo user={userJson}/>}  
    </>
  );
};

export { SearchContainer };
