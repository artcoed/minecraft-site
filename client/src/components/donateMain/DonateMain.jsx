import React from 'react';
import "./donateMain.css"
import { Link } from 'react-router-dom';


import SlickSlider from "../slickSlider/SlickSlider";
const DonateMain = () => {
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
        <div className="donate-main">
            <section className="donate-page">
                <div className="donate-heading h1-block">
                    <div className="donate-heading-text h1-text">Донат</div>
                </div>
                <SlickSlider/>
                <div className="btn-all-donate">
                    <div className="btn-all-donate-text">
                        <Link to="donate" onClick={()=>goToStartPage()}>
                            <div className="text-btn-donate-all-click">
                                Подробнее...
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonateMain;