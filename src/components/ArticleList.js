import React from "react";
import Article from "./Article";

const ArticleList = ({articles}) => {
    return (
        <main>
            {articles.map((article, index) => (
                <Article key={index} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>
            ))}
        </main>
    )
}

export default ArticleList