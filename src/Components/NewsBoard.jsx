import { React, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import sampleNews from "../sampleNews.json";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch((error) => {
                console.error("Error fetching news (likely 426 Upgrade Required for free tier on prod). Using fallback data: ", error);
                setArticles(sampleNews);
            });
    }, [category]);

    return (
        <div>
            <h2 className="text-center">
                Latest<span className="badge bg-danger">News</span>
            </h2>

            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}

        </div>
    );
};

export default NewsBoard;
