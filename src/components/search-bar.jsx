import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
// import './MonComposant.css';

function SearchBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className="search-container">
            <div className="search-icon-wrapper">
              <SearchIcon />
            </div>
            <InputBase
              className="search-input"
              placeholder="search twitter"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;

// CSS

// .search-container {
//   position: relative;
//   border-radius: 4px;
//   background-color: #fff;
//   &:hover {
//     background-color: #fff;
//   }
//   margin-right: 16px;
//   margin-left: 0;
//   width: 100%;
// }

// .search-icon-wrapper {
//   padding: 8px;
//   height: 100%;
//   position: absolute;
//   pointer-events: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .search-input {
//   color: inherit;
//   & .MuiInputBase-input {
//     padding: 8px 8px 8px 0;
//     padding-left: calc(1em + 32px);
//     transition: width 200ms ease-in-out;
//     width: 100%;
//   }


