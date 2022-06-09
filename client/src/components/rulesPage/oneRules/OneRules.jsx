import React from 'react';
import "../rulesPage.css"


const OneRules = ({heading, content}) => {
    return (
        <div className="one-rules">
            <div className="rules-block-info">
                <div className="block-container-click" onClick={
                    (event)=>{
                        let elementChange = event.target
                        while (!elementChange.classList.contains('rules-block-info')){
                            elementChange = elementChange.parentNode
                        }
                        elementChange.classList.toggle('rules-block-info-active')
                    }}>
                    <div className="rules-block-info-text">{heading}</div>
                    <div className="rules-block-info-arrow">
                        <svg version="1.1" className="arrow-image-rules" xmlns="http://www.w3.org/2000/svg"
                             x="0px" y="0px"
                             viewBox="0 0 491.996 491.996">
                            <g>
                                <g>
                                    <path className="arrow-image-rules-icon" d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
									L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
									c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
									c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
									C491.996,136.902,489.204,130.046,484.132,124.986z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="content-block-info-text">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default OneRules;