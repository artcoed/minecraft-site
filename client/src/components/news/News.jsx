import React from 'react';
import sheep from "../../assets/img/sheep.png"
import "./news.css"
import { Link } from 'react-router-dom';
import OneNews from "../allNews/oneNews/OneNews";

const News = () => {
    function goToStartPage() {
        const timeScroll = 200
        let nowPosition = window.pageYOffset
        const frame = nowPosition / timeScroll * 10
        let animationScroll = setInterval(()=>{
            if(nowPosition === 0){
                clearInterval(animationScroll)
            }else{
                nowPosition -= frame
                if (nowPosition < 0){
                    nowPosition = 0
                }
                window.scrollTo(0, nowPosition)
            }
        },10)

    }
    return (
        <div className="news">
            <section className="news-page">
                <div className="news-heading h1-block">
                    <div className="news-heading-text h1-text">Последние новости</div>
                </div>
                <div className="news-page-container">
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                    <OneNews image={sheep} heading={"Рады сообщить, что мы открылись"} linkNews={'news-1'}/>
                </div>
                <div className="all-news-btn">
                    <Link to="news" onClick={()=>goToStartPage()}>
                        <div className="all-news-btn-text">Все новости...</div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default News;