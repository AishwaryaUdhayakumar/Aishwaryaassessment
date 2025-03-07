import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate to handle redirection

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to manage the search input
  const navigate = useNavigate(); // useNavigate to programmatically redirect the user

  // Handle the change in the search input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle the form submission to search
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (searchQuery.trim()) {
      // Redirect to the search results page with the search query as a URL parameter
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><span className="badge bg-light text-dark fs-4">ABC Magazine</span></Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/politics">Politics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tech">Tech</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cinema">Cinema</Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Search form */}
      <form className="d-flex me-2" onSubmit={handleSearchSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange} // Update state on input change
        />
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
