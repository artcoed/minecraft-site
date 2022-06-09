import React from 'react';
import Welcome from "../welcome/Welcome";
import News from "../news/News";
import DonateMain from "../donateMain/DonateMain";
import OnlineAllServers from "../onlineAllServers/OnlineAllServers";
import InfoServer from "../infoServer/InfoServer";


const MainPageAll = ({setModalActive, modalActive}) => {
    return (
        <div className="main-page-all">
            <Welcome modalActive={modalActive} setModalActive={setModalActive}/>
            <InfoServer/>
            <News/>
            <DonateMain/>
            <OnlineAllServers/>
        </div>
    );
};

export default MainPageAll;