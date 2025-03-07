import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // To get query parameters from the URL

const SearchResults = () => {
  const [articles, setArticles] = useState([]); // State to hold search results
  const [loading, setLoading] = useState(true); // Loading state for the results
  const location = useLocation(); // Use location to access URL query parameters

  // Extract the search query from the URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  useEffect(() => {
    // Simulate an API call to fetch articles based on the search query
    // Replace this with actual API call logic
    const fetchArticles = async () => {
      setLoading(true);
      const response = await fetch(`/api/articles?search=${searchQuery}`); // Your API endpoint
      const data = await response.json();
      setArticles(data);
      setLoading(false);
    };

    if (searchQuery) {
      fetchArticles();
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      <div>
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link to={`/news/${article.id}`}>Read more</Link>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
