import React from 'react';
import "../allNews.css"
import {Link} from 'react-router-dom';
const OneNews = ({image, heading,linkNews}) => {
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
        <div className="one-news">
            <Link to={linkNews}>
                <div className="news-page-block" onClick={()=> goToStartPage()}>
                    <div className="news-page-image-block">
                        <img className="news-page-image" src={image} alt=""/>
                        <div className="black-bcg"/>
                    </div>
                    <div className="news-page-text">{heading}</div>
                    <div className="read-button">
                        <div className="read-button-text">Читать</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default OneNews;