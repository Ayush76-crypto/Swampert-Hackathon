import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import Card from "./newscard";
import "./news.css";


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="newsfeed">
      <h2 className="head__text">Agriculture And Farmers Welfare News</h2>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <Card data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;