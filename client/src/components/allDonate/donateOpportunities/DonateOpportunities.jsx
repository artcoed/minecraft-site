import React from 'react';
import "../allDonate.css"

const DonateOpportunities = ({can, text}) => {
    return (
        <div className="donate-opportunities">
            <div className="opportunities-block">
                <div className="opportunities-text">
                    <div className={can ? "opportunities-text-content opportunities-text-content-unlock" : "opportunities-text-content"}>
                        {text}
                    </div>
                    {can ?
                        <div className="opportunities-text-icon">
                            <svg className="icon-opportunities-image-block" height="512"
                                 viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon-opportunities-image"
                                      d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/>
                            </svg>
                        </div>
                    :
                        <div className="opportunities-text-icon">
                            <svg version="1.1" className="icon-opportunities-image-block"
                                 xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 viewBox="0 0 485.2 485.2">
                                <g>
                                    <path className="icon-opportunities-image" d="M363.9,212.3v-91C363.9,54.4,309.5,0,242.6,0c-66.9,0-121.3,54.4-121.3,121.3v91c-33.5,0-60.7,27.2-60.7,60.6
									v151.6c0,33.5,27.2,60.7,60.7,60.7h242.6c33.5,0,60.7-27.2,60.7-60.7V272.9C424.6,239.4,397.4,212.3,363.9,212.3z M257.8,359.3
									v50.1c0,8.4-6.8,15.2-15.2,15.2c-8.4,0-15.2-6.8-15.2-15.2v-50.1c-8.9-5.3-15.2-14.6-15.2-25.7c0-16.8,13.6-30.3,30.3-30.3
									s30.3,13.6,30.3,30.3C272.9,344.7,266.7,354,257.8,359.3z M303.3,212.3H182v-91c0-33.5,27.2-60.7,60.7-60.7
									c33.4,0,60.6,27.2,60.6,60.7L303.3,212.3L303.3,212.3z"/>
                                </g>
                            </svg>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default DonateOpportunities;