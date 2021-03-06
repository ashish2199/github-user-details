import { useEffect, useState } from "react";
import { getUserApiUrl, getUserReposApiUrl } from "../../ApiEndpoints";
import { UserInfo } from "../UserInfo";
import "./styles.css";

const SearchContainer = function ({ addToHistory, searchString }) {
  const [userName, setUserName] = useState(searchString || "");
  const [userJson, setUserJson] = useState("");

  useEffect(() => {
    fetchUserData(userName);
  }, []);

  function onSubmit(evt) {
    evt.preventDefault();
    fetchUserData(userName);
  }

  function fetchUserData(userName) {
    if (!userName) {
      return;
    }
    let userDetailsUrl = getUserApiUrl(userName);
    let userReposUrl = getUserReposApiUrl(userName);
    Promise.all([fetchData(userDetailsUrl), fetchData(userReposUrl)]).then(
      (values) => {
        let [userDetails, repos] = values;
        let userData = { userDetails, repos };
        console.log(userData);
        setUserJson(userData);
        addToHistory(userName);
      }
    );
  }

  function onUsernameChange(evt) {
    let value = evt.target.value;
    if (!value) {
      setUserJson(undefined);
    }
    setUserName(value);
  }

  async function fetchData(url) {
    let response = await fetch(url);
    let responseOutput = await response.json();
    return responseOutput;
  }

  return (
    <>
      <div className="pageTitle">Search</div>
      <div className="serachForm">
        <form>
          <label>Enter username</label>
          <input type="text" value={userName} onChange={onUsernameChange} />
          <input type="submit" onClick={onSubmit} />
        </form>
      </div>
      <div className="userInfoContainer">
        {userJson && userName && <UserInfo user={userJson} />}
      </div>
    </>
  );
};

export { SearchContainer };
