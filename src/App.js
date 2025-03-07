import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import Sports from './Components/Sports';
import Tech from './Components/Tech';
import NewsItem from './Components/NewsItem';
import SearchResults from './Components/SearchResults'; // Import the search results page
import Politics from './Components/Politics';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* Navbar is outside of the Routes since it should be always visible */}
        <Routes>
          <Route index element={<NewsBoard />} /> {/* Main page route */}
          <Route path="/politics" element={<Politics/>}/>
          <Route path="/sports" element={<Sports />} /> {/* Sports page route */}
          <Route path="/tech" element={<Tech />} /> {/* Tech page route */}
          <Route path="/news/:id" element={<NewsItem />} /> {/* News item route */}
          <Route path="/search" element={<SearchResults />} /> {/* Search results route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
