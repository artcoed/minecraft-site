import React, {useState} from 'react';
import "./profile.css"
import {useSelector} from "react-redux";
import ModalLogout from "../modalProfile/modalLogout/ModalLogout";

const Profile = () => {
    const auth = useSelector(state => state.user.isAuth)
    const [modalLogoutAccept, setModalLogoutAccept] = useState(false)
    const nickname = useSelector(state => state.user.currentUser.username)
    const dataRegNumber = useSelector(state => state.user.currentUser.date_registration)
    const donateSumm = useSelector(state => state.donate.price)
    const dataReg = new Date(dataRegNumber).toLocaleString()
    return (
        <div className="profile">
            <section className="profile-page">
                {auth ?
                    <div className="profile-page-container">
                        <div className="h1-profile-block">
                            <div className="h1-profile-text">
                                Профиль
                            </div>
                        </div>
                        <div className="profile-nickname-block blocks-profile">
                            <div className="profile-nickname-text texts-profile">Никнейм: {nickname}
                            </div>
                        </div>
                        <div className="profile-donate-block blocks-profile">
                            <div className="profile-donate-text texts-profile">Потрачено: {donateSumm}</div>
                        </div>
                        <div className="profile-data-block blocks-profile">
                            <div className="profile-data-text texts-profile">Дата регистрации: {dataReg}</div>
                        </div>
                        <div className="logout-profile-block-btn">
                            <div className="logout-profile-text-btn" onClick={()=>setModalLogoutAccept(true)}>
                                Выйти
                            </div>
                        </div>
                    </div>
                :
                <div className="no-login">Вы не авторизованы!</div>
                }
            </section>
            <ModalLogout modalLogoutAccept={modalLogoutAccept} setModalLogoutAccept={setModalLogoutAccept}/>
        </div>
    );
};

export default Profile;