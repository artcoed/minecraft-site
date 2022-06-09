import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickSlider.css"
import diamond from "../../assets/img/diamond.png"
import redstone from "../../assets/img/redstone.png"
import gold from "../../assets/img/gold.png"
import lapis from "../../assets/img/lapis.png"


const SlickSlider = ({swipe}) => {
    if (swipe){
        swipe = false
    }else{
        swipe = false
    }
    let settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        centerMode: true,
        touchThreshold: 8,
        touchMove: swipe,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                <div className="slider-block-new">
                    <div className="slider-container-new">
                        <div className="slider-cont-new">
                            <img className="image-slide-new" src={gold} alt=""/>
                            <div className="donate-name">
                                <div className="donate-name-text">Игрок</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-block-new">
                    <div className="slider-container-new">
                        <div className="slider-cont-new">
                            <img className="image-slide-new" src={lapis} alt=""/>
                            <div className="donate-name">
                                <div className="donate-name-text">Вип</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-block-new">
                    <div className="slider-container-new">
                        <div className="slider-cont-new">
                            <img className="image-slide-new" src={diamond} alt=""/>
                            <div className="donate-name">
                                <div className="donate-name-text">Админ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-block-new">
                    <div className="slider-container-new">
                        <div className="slider-cont-new">
                            <img className="image-slide-new" src={redstone} alt=""/>
                            <div className="donate-name">
                                <div className="donate-name-text">Опка</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlickSlider;