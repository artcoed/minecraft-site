import React, {useState} from 'react';
import "../header/headerLogin.css"
import "./modalProfile.css"
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import ModalLogout from "./modalLogout/ModalLogout";

const ModalProfile = ({active, setActive}) => {
    const nickname = useSelector(state => state.user.currentUser.username)

    const [modalLogoutAccept, setModalLogoutAccept] = useState(false)
    return (
        <div className={active ? "modal-profile active-modal-profile" : "modal-profile"}>

            <div className="nickname-container">
                <div className="icon-svg-nickname">
                    <svg version="1.1" className="icon-svg-nickname-image"
                         xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px"
                         viewBox="0 0 213.333 213.333">
                        <g>
                            <g>
                                <polygon points="0,53.333 106.667,160 213.333,53.333 		"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="all-nickname-container-block">
                        <div className="nickname-block">
                            <div className="nickname-text">{nickname}</div>
                        </div>
                    <div className="nickname-btn-profile-block">
                        <Link to="/profile" onClick={()=> setActive(false)}>
                            <div className="nickname-btn-profile-text">
                                Профиль
                            </div>
                        </Link>
                    </div>
                    <div className="logout-btn-container">
                        <div className="logout-btn-block">
                            <div className="logout-btn-text" onClick={() => {
                                setModalLogoutAccept(true)
                                setActive(false)
                            }}>Выйти</div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalLogout modalLogoutAccept={modalLogoutAccept} setModalLogoutAccept={setModalLogoutAccept}/>
        </div>
    );
};

export default ModalProfile;