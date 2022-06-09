import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onlineGetted} from "../../actions/online";
import "./onlineAllServers.css"


const OnlineAllServers = () => {
    const online = useSelector(state => state.online.online)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(onlineGetted())
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="onlineAllServers">
            <section className="online-page">
                <div className="online-text-block h1-block">
                    <div className="online-text-h1 h1-text">Онлайн сервера</div>
                </div>
                <div className="online-cont-all">
                    <div className="online-cont-cont">
                        <div className="online-container online-container-one">
                            <div className="online-text">
                                <p className="text-on">Текущий онлайн:</p>
                                <p className="online-number">{online}</p>
                                <p className="text-pl">игроков</p>
                            </div>
                        </div>
                        <div className="online-container online-container-two">
                            <div className="online-text">
                                <p className="text-on">Максимальный онлайн:</p>
                                <p className="online-number">?</p>
                                <p className="text-pl">игроков</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OnlineAllServers;