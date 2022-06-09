import React from 'react';
import "./modalLogout.css"
import {logoutUser} from "../../../reducers/userReducer";
import {useDispatch} from "react-redux";

const ModalLogout = ({modalLogoutAccept, setModalLogoutAccept}) => {
    const dispatch = useDispatch()
    return (
        <div className={!modalLogoutAccept ? "modal-logout" : "modal-logout modal-logout-active"}>
            <div className="logout-accept-container">
                <div className="logout-accept-block-h1">
                    Вы уверены, что хотите выйти?
                </div>
                <div className="logout-accept-block-answer">
                    <div className="logout-accept-block-variable-answer logout-accept-block-yes">
                        <div className="logout-accept-block-variable-answer-text logout-accept-block-yes-text" onClick={() => {
                            setModalLogoutAccept(false)
                            dispatch(logoutUser())
                        }}>Да</div>
                    </div>
                    <div className="logout-accept-block-variable-answer logout-accept-block-no">
                        <div className="logout-accept-block-variable-answer-text logout-accept-block-no-text" onClick={()=>setModalLogoutAccept(false)}>Нет</div>
                    </div>
                </div>
            </div>
            <div className="background-logout-accept" onClick={()=>setModalLogoutAccept(false)}></div>
        </div>
    );
};

export default ModalLogout;