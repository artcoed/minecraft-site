import React from 'react';
import sheep from "../../assets/img/sheep.png"
import "./allNews.css"
import OneNews from "./oneNews/OneNews";

const AllNews = () => {
    return (
        <div className="all-news">
            <section className="news-page">
                <div className="news-heading h1-block">
                    <div className="news-heading-text h1-text">Новости</div>
                </div>
                <div className="news-page-container">
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                </div>
            </section>
        </div>
    );
};

export default AllNews;