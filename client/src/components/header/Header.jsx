import React, {useRef, useState} from 'react';
import './header.css'
import "./headerLogin.css"
import {useSelector} from "react-redux";
import Modal from "../modal/Modal";
import ModalProfile from "../modalProfile/ModalProfile";
import avatar from "../../assets/img/avatar.png"
import {Link} from 'react-router-dom';

const Header = ({modalActive, setModalActive}) => {
    const isAuth = useSelector(state => state.user.isAuth)
    const [modalProfileActive, setModalProfileActive] = useState(false)
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

    const header = useRef()
    const headerFake = useRef()

    const [headerFixed, setHeaderFixed] = useState(false)



    let scroll = 0;
    window.onscroll = onScroll;
    function onScroll() {
        let top = window.pageYOffset;
        let headerHeight = getComputedStyle(header.current).height
        if (scroll > top) {
            if(header.current){
                if (top > Number(headerHeight.replace(/[^.\d]/g, ""))){
                    headerFake.current.style.height = headerHeight
                    setHeaderFixed(true)
                }else {
                    setHeaderFixed(false)
                }
            }
        } else if (scroll < top) {

        }
        scroll = top;
    }


    return (
        <div className="header">
            <section ref={headerFake} className={!headerFixed ? "header-page-see" : "header-page-see header-page-see-animation-fixed"}/>
            <section ref={header} className={!headerFixed ? "header-page" : "header-page header-page-animation-fixed"}>
                <header>
                    <div className="container-header-elements">
                        <div className="logo-element header-element">
                            <Link to="/" onClick={()=> goToStartPage()}>
                                <div className="logo-block text-settings-block">
                                    <div className="logo-text">NAMESSA</div>
                                </div>
                            </Link>
                        </div>
                        <div className="menu-elemet header-element">
                            <div className="news-block menu-block">
                                <Link to="/news" onClick={()=> goToStartPage()}>
                                    <div className="link-block">
                                        <svg version="1.1" className="menu-image" xmlns="http://www.w3.org/2000/svg"
                                              x="0px" y="0px"
                                             viewBox="0 0 32 32">
								<path className="icons-heading" d="M3,5v1v17c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V13v-1h-1h-5V6V5h-1H4H3z M5,7h16v5v1v10c0,0.7,0.2,1.4,0.6,2H7
									c-1.2,0-2-0.8-2-2V7z M7,9v1v3v1h1h10h1v-1v-3V9h-1H8H7z M9,11h8v1H9V11z M23,14h4v9c0,1.2-0.8,2-2,2s-2-0.8-2-2V14z M7,15v2h5v-2H7
									z M14,15v2h5v-2H14z M7,18v2h5v-2H7z M14,18v2h5v-2H14z M7,21v2h5v-2H7z M14,21v2h5v-2H14z"/>
								</svg>
                                        <div className="news-text menu-text">Новости</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="donate-block menu-block">
                                <Link to="/donate" onClick={()=> goToStartPage()}>
                                    <div className="link-block">
                                        <svg version="1.1" className="menu-image" xmlns="http://www.w3.org/2000/svg"
                                              x="0px" y="0px"
                                             viewBox="0 0 32 32">
								<g id="Layer_2">
									<path className="icons-heading" d="M23.5,29h-15c-3,0-5.5-2.5-5.5-5.5c0-0.5,0.1-0.9,0.2-1.3l3-12.4C6.4,9.3,6.8,9,7.2,9H24c0.5,0,0.9,0.3,1,0.7
										l3.8,12.2c0.5,1.7,0.2,3.5-0.8,4.9C26.9,28.2,25.3,29,23.5,29z M8,11L5.1,22.6c-0.5,1.9,0.7,3.8,2.5,4.2C7.9,27,8.2,27,8.5,27h15
										c1.1,0,2.1-0.5,2.8-1.4c0.7-0.9,0.9-2.1,0.5-3.1L23.3,11H8z"/>
                                    <path className="icons-heading" d="M20,17c-0.6,0-1-0.4-1-1V8c0-1.7-1.3-3-3-3s-3,1.3-3,3v8c0,0.6-0.4,1-1,1s-1-0.4-1-1V8c0-2.8,2.2-5,5-5
										s5,2.2,5,5v8C21,16.6,20.6,17,20,17z"/>
								</g>
								</svg>
                                        <div className="donate-text menu-text">Донат</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="rules-block menu-block">
                                <Link to="/rules" onClick={()=> goToStartPage()}>
                                    <div className="link-block">
                                        <svg version="1.1" className="menu-image" xmlns="http://www.w3.org/2000/svg"
                                              x="0px" y="0px"
                                             viewBox="0 0 79.5 79.5">
								<g>
									<path className="icons-heading" d="M40.2,17.9C37.4,15.3,21.6,6.1,0,15.5c0,0.1,0,2.7,0,6.7v44.4h32.7c1.1,1,3.8,1.7,6.9,1.7
										c3.1,0,5.8-0.7,6.9-1.7h32.9V22.1c0-3.9,0-6.5,0-6.7C58.8,6.3,42.3,16,40.2,17.9z M37.2,63.3c0-1.8-15.4-12-33.1-0.8V19.2
										c3.5-2,8.2-3.2,13.5-3.2c10.9,0,19.7,3.6,19.7,10.2C37.2,26.1,37.2,63.3,37.2,63.3z M75.7,62.5c-17.8-11.2-33.1-0.9-33.1,0.8V26.1
										c0-6.6,8.8-10.2,19.6-10.2c5.2,0,10,1.2,13.5,3.2L75.7,62.5L75.7,62.5z"/>
								</g>
								</svg>
                                        <div className="rules-text menu-text">Правила</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {!isAuth ?
                        <div className="log-in-element header-element">
                            <div onClick={() => {
                                setModalActive(true)
                                goToStartPage()
                            }} className="log-in-block text-settings-block">
                                <div className="log-in-text">войти</div>
                            </div>
                        </div> :
                        <div className="div-logout-header">
                            <div className="nickname-element header-element">
                                <div className="nickname-player-block" onClick={()=> {
                                    if (modalProfileActive) {
                                        setModalProfileActive(false)
                                    } else {
                                        setModalProfileActive(true)
                                    }

                                }}>
                                    <div className="nickname-player-image">
                                        <img src={avatar} className="ava-header" alt=""/>
                                    </div>
                                    <div className="nickname-menu-img">
                                        <svg version="1.1" className={!modalProfileActive ? "nickname-menu-img-image" : "nickname-menu-img-image rotate-nickname-menu-img-image"}
                                             xmlns="http://www.w3.org/2000/svg"
                                             x="0px" y="0px"
                                             viewBox="0 0 491.996 491.996">
                                            <g>
                                                <g>
                                                    <path className="icon-nickname-menu" d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
                                                    L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
                                                    c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
                                                    c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
                                                    C491.996,136.902,489.204,130.046,484.132,124.986z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ModalProfile active={modalProfileActive} setActive={setModalProfileActive}/>
                        </div>}
                    </div>
                </header>
            </section>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>

    );
};

export default Header;