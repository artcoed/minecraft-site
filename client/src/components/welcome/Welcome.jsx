import React from 'react';
import "./welcome.css"
import videoMain from "../../assets/video/video.mp4"
import sheep from "../../assets/img/sheep.png"
import {useSelector} from "react-redux";

const Welcome = ({setModalActive, modalActive}) => {
    const isAuth = useSelector(state => state.user.isAuth)
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
        <div className="welcome">
            <section className="welcome-page">
                <div className="container-video">
                    <video className="video" src={videoMain} poster={sheep} autoPlay muted loop/>
                    <div className="block"></div>
                </div>
                <div className="welcome_content">
                    <div className="welcome-text">Будем рады увидеть вас на нашем сервере!</div>
                    <div className="welcome-logo-text">NAMESSA</div>
                    {!isAuth &&
                    <div className="welcome-button-log-in">
                        <div className="welcome-button-block" onClick={() => {
                            setModalActive(true)
                            goToStartPage()
                        }}>
                            <div className="welcome-button-log-in-text">ВОЙТИ</div>
                        </div>
                    </div>

                    }
                </div>
            </section>
        </div>
    );
};

export default Welcome;