import React, {useEffect, useRef, useState} from 'react';
import "./mySlider.css"

const MySlider = ({arrayImage = []}) => {
    function paddingsContainers(){
        const containers = document.getElementsByClassName('slider-container-new-cont-new')
        const image = document.getElementsByClassName('slider-image-new-new')[0]
        console.log(image)
        if (image){
            const imageWidth = getComputedStyle(image).width.replace(/[^.\d]/g, "")
            const widthContent = Number(getComputedStyle(document.getElementsByClassName('all-contant-container')[0]).width.replace(/[^.\d]/g, ""))
            for (let i = 0; i < containers.length; i++){
                containers[i].style.paddingLeft = ((window.innerWidth / 2 - imageWidth / 2) - ((window.innerWidth - widthContent) / 2)) + "px"
            }
        }
    }
    function goToFirstSlide() {
        const containers = document.getElementsByClassName('slider-container-new-cont-new')
        for (let i = 0; i < containers.length; i++){
            containers[i].children[0].children[0].style.transform = ""
            containers[i].children[1].innerHTML = 0
        }
    }
    const [isLastBlock, setIsLastBlock] = useState('false')
    useEffect(()=>{
        paddingsContainers()
    }, [])
    const firstPlay = useRef(true)
    const [prevButton, setPrevButton] = useState(false)
    const [nextButton, setNextButton] = useState(false)
    window.addEventListener('resize', paddingsContainers)
    window.addEventListener('resize', goToFirstSlide)
    useEffect(()=>{
        if(firstPlay.current){
            firstPlay.current = false
        }else{
            if(prevButton){
                const time = 150
                let transformElement = prevButton.parentNode.children[0].children[0]
                let activeSlide = prevButton.parentNode.children[1]
                const activeSlideText = Number(activeSlide.innerHTML)
                if(activeSlideText === 0){
                    setPrevButton(false)
                    return
                }
                const widthElement = Number(getComputedStyle(document.getElementsByClassName('slider-image-new-new')[0]).width.replace(/[^.\d]/g, ""))
                const frame = widthElement / (time / 5);
                const lastPosition = (widthElement * activeSlideText) - widthElement
                let positionNow = widthElement * activeSlideText
                let animation = setInterval(()=>{
                    if (Number(positionNow).toFixed(5) === Number(lastPosition).toFixed(5)) {
                        clearInterval(animation);
                        activeSlide.innerHTML = activeSlideText - 1
                        setPrevButton(false)
                    }else{
                        positionNow -= frame;
                        if(Number(positionNow) < 0){
                            positionNow = 0.00000
                        }
                        transformElement.style.transform = `translate3d(-${positionNow}px, 0, 0)`
                    }
                }, 10)
            }
            if(nextButton){
                const time = 150
                const transformElement = nextButton.parentNode.children[0].children[0]
                const activeSlide = nextButton.parentNode.children[1]
                const activeSlideText = Number(activeSlide.innerHTML)
                if(transformElement.children.length < (activeSlideText + 2)){
                    setNextButton(false)
                    return
                }
                const widthElement = Number(getComputedStyle(document.getElementsByClassName('slider-image-new-new')[0]).width.replace(/[^.\d]/g, ""))
                const frame = widthElement / (time / 5);
                const lastPosition = widthElement * (activeSlideText + 1)
                let positionNow = widthElement * activeSlideText
                let animation = setInterval(()=>{
                    if (Number(positionNow).toFixed(5) === Number(lastPosition).toFixed(5)) {
                        clearInterval(animation);
                        activeSlide.innerHTML = activeSlideText + 1
                        setNextButton(false)
                    }else{
                        positionNow += frame;
                        transformElement.style.transform = `translate3d(-${positionNow}px, 0, 0)`;
                    }
                }, 10)
            }
        }
    }, [prevButton,nextButton])
    return (
        <div className="my-slider">
            <div className="slider-container-new-cont-new">
                <div className="slider-container-new-new">
                    <div className="sliders-new-new">
                        {arrayImage.map((image, index) =>
                            <div key={index} className="slider-container-new-block-new">
                                <img className="slider-image-new-new" src={image} alt=""/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="active-slide-new-new">0</div>
                <button onClick={(event)=> setPrevButton(event.target)} className={nextButton ? "prev-slide-new-new show-off" : prevButton ? "prev-slide-new-new show-off" : "prev-slide-new-new"}>
                    <svg version="1.1" className="slide-new-new-icon-image slide-new-new-icon-image-prev" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 492 492">
                        <g>
                            <g>
                                <path className="slide-new-new-icon" d="M382.7,226.8L163.7,7.9c-5.1-5.1-11.8-7.9-19-7.9s-14,2.8-19,7.9L109.5,24c-10.5,10.5-10.5,27.6,0,38.1
                                    l183.9,183.9L109.3,430c-5.1,5.1-7.9,11.8-7.9,19c0,7.2,2.8,14,7.9,19l16.1,16.1c5.1,5.1,11.8,7.9,19,7.9s14-2.8,19-7.9L382.7,265
                                    c5.1-5.1,7.9-11.9,7.8-19.1C390.5,238.7,387.8,231.9,382.7,226.8z"/>
                            </g>
                        </g>
                    </svg>
                </button>
                <button onClick={(event)=> setNextButton(event.target)} className={nextButton ? "next-slide-new-new show-off" : prevButton ? "next-slide-new-new show-off" : "next-slide-new-new"}>
                    <svg version="1.1" className="slide-new-new-icon-image" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 492 492">
                        <g>
                            <g>
                                <path className="slide-new-new-icon" d="M382.7,226.8L163.7,7.9c-5.1-5.1-11.8-7.9-19-7.9s-14,2.8-19,7.9L109.5,24c-10.5,10.5-10.5,27.6,0,38.1
                                    l183.9,183.9L109.3,430c-5.1,5.1-7.9,11.8-7.9,19c0,7.2,2.8,14,7.9,19l16.1,16.1c5.1,5.1,11.8,7.9,19,7.9s14-2.8,19-7.9L382.7,265
                                    c5.1-5.1,7.9-11.9,7.8-19.1C390.5,238.7,387.8,231.9,382.7,226.8z"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MySlider;