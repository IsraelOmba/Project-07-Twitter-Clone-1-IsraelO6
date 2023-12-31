import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendsForYou from '../components/trends-for-you.jsx';
import SearchBar from '../components/search-bar.jsx';
import WhoToFollow from '../components/whoToFollow.jsx';



function Trends() {
  return (
    <div className="trends">
      
      <div className="search-bar">
        <SearchBar />
      </div>
      
      <div className="trends-for-you">
        
        <div>
          <div>
            <h3 className="pagetitle">Trends for you</h3>
          </div>

          <div>
            <SettingsIcon />
          </div>
          
        </div>
        
        <div>
          <TrendsForYou />
          <TrendsForYou />
          <TrendsForYou />
          <TrendsForYou />
        </div>

      </div>
      

      
      <div>
        <WhoToFollow />
      </div>
      
    </div>
  );
}

export default Trends;