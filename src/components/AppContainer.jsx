import { useState } from 'react';
import { Switch, Route, Link, useLocation, useHistory } from 'react-router-dom'
import { SearchContainer } from "./SearchContainer.jsx";
import { HistoryContainer } from "./HistoryContainer.jsx";

import "./styles/AppContainer.css";

const AppContainer = function () {
    const [searchHistory, setsearchHistory] = useState([]);
    const history = useHistory();
    const location = useLocation()
    let query = new URLSearchParams(location.search);
    
    function addSearch(search){
        replaceQueryParam('q',search);
        setsearchHistory([{timestamp: new Date(), userName: search},  ...searchHistory])
    }
    
    function replaceQueryParam(key,value){
        const params = new URLSearchParams({[key]: value });
        history.replace({ pathname: location.pathname, search: params.toString() }); 
    }

    return (
      <>
        <header className="App-header">
          <nav>
              <div><Link to='/search'>Search</Link></div>
              <div><Link to='/History'>History</Link></div>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
              <SearchContainer addToHistory={addSearch} />
          </Route>
          <Route path='/search' >
            <SearchContainer searchString={query.get("q")} addToHistory={addSearch} />
          </Route>
          <Route path='/history'>
            <HistoryContainer searchHistory={searchHistory} />
          </Route>
        </Switch>
      </>
    );
  };
  
  export { AppContainer };
  