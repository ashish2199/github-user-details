import { Link} from 'react-router-dom'
import "./styles/HistoryContainer.css"

const HistoryContainer = function ({searchHistory}) {
  return (
    <>
      <div style={{height: "5%"}}>
        <h2>History Page</h2>  
      </div>
      <div className="searchHistory" style={{height: "95%"}}>
        {
          searchHistory.map((record,i) =>
            <div className="record" key={i}>
              <div className="recordsContent">{record.timestamp.toLocaleString()}</div> 
              <div className="recordsContent">
                <Link to={'/search?q='+record.userName} >{record.userName}</Link>
              </div>
            </div>    
          )
        }
      </div>
    </>
  );
};

export { HistoryContainer };
