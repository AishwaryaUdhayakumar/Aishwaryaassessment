import { useState,useEffect } from "react"
import NewsItem from "./NewsItem";
import React from "react";

const Cinema= () => {

    const[articles,setArticles]=useState([]);

    useEffect(() => {
      const fetchArticles = async () => {
        try {
          let url = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=8746c9095c184f239a1e4c577be03fae`;
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          let data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      };
    
      fetchArticles();
    }, []);
    
return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      
      })}
    </div>
  )
}

export default Cinema;
