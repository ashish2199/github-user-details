import "./styles.css";

function UserInfo(props) {
  let user = props.user.userDetails;
  let repos = props.user.repos;
  let noUserFound = <h2>No such username exists</h2>;
  let userData = (
    <div className="userDetails">
      <img width="200px" src={user.avatar_url} alt="Gihub user's profile" />
      <h2>
        Details : <a href={user.html_url}>{user.login}</a>
      </h2>
      <dl>
        <dt>Name</dt> <dd>{user.name}</dd>
        <dt>Location</dt> <dd>{user.location}</dd>
        <dt>Followers</dt> <dd>{user.followers}</dd>
        <dt>Following</dt> <dd>{user.following}</dd>
        <dt>About</dt> <dd>{user.bio}</dd>
        <dt>Joined</dt> <dd>{new Date(user.created_at).toLocaleString()}</dd>
        <dt>Last Updated</dt>{" "}
        <dd>{new Date(user.updated_at).toLocaleString()}</dd>
      </dl>
    </div>
  );
  let userRepos = (
    <div className="userRepos">
      {Array.isArray(repos) &&
        repos.map((r, i) => (
          <div className="userRepo" key={i}>
            <div className="repoTitle">
              <div style={{ width: "60%", textAlign: "left" }}>
                <a href={r.html_url}> {r.name} </a>
              </div>
              <div className="repoStat">
                <div>Language: {r.language} </div>
                <div>Stars: {r.stargazers_count} </div>
              </div>
            </div>
            <div className="repoDescription">{r.description}</div>
          </div>
        ))}
    </div>
  );
  let userDetails = (
    <div className="userData">
      {userData}
      {userRepos}
    </div>
  );
  return <>{user.message === "Not Found" ? noUserFound : userDetails}</>;
}
export { UserInfo };
