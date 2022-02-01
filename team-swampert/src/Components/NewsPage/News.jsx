import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import Card from "./newscard.tsx";
import "./news.css";


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="newsfeed">
      <h1 className="head__text">Agriculture And Farmers Welfare News</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <Card data={news} key={news._id} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;