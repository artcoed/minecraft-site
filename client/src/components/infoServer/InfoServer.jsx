import React from 'react';
import "./infoServer.css"

const InfoServer = () => {
    return (
        <div className="info-server">
            <section className="how-play-page">
                <div className="how-play-container">
                    <div className="content-block-how-play">
                        <div className="content-block-how-play-text">
                            Версия: <span>1.12.2+</span>
                        </div>
                        <div className="content-block-how-play-text">
                            IP: <span>text.ru</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoServer;