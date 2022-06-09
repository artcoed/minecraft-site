import React, {useEffect, useState, useRef} from 'react';
import "./allDonate.css"
import SlickSlider from "../slickSlider/SlickSlider";
import {useDispatch, useSelector} from "react-redux";
import {donateGetted} from "../../actions/donate";
import {giveDonate} from "../../actions/donateBuy";
import DonateOpportunities from "./donateOpportunities/DonateOpportunities";

const AllDonate = () => {
    useEffect(()=>{
        document.getElementsByClassName("slick-arrow")[0].addEventListener('click', changeDonate)
        document.getElementsByClassName("slick-arrow")[1].addEventListener('click', changeDonate)
    },[])
    const [donate, setDonate] = useState("Игрок")
    function changeDonate(){
        setTimeout(()=>{
            const nowSlide = document.getElementsByClassName('slick-current')[0]
            setDonate(nowSlide.children[0].children[0].children[0].children[0].children[1].children[0].innerHTML)
        },400)
    }
    const errorGetDonate = useSelector(state => state.donate.error)
    const isAuth = useSelector(state => state.user.isAuth)
    const nickname = useSelector(state => state.user.currentUser.username)
    const [modeBuy, setModeBuy] = useState(false)
    const [nicknamePresent, setNicknamePresent] = useState("")
    const [updateButton, setUpdateButton] = useState("")
    const [updateButtonState, setUpdateButtonState] = useState(false)
    const donatePrice = useSelector(state => state.donate.price)
    const [buyButton, setBuyButton] = useState('');
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!isAuth){
            dispatch(donateGetted(nicknamePresent))
        }else{
            if(modeBuy){
                dispatch(donateGetted(nicknamePresent))
            }else{
                dispatch(donateGetted(nickname))
            }
        }
    }, [updateButton, nickname, modeBuy])// eslint-disable-line react-hooks/exhaustive-deps
    const firstUpdate = useRef(true)
    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            if(!isAuth){
                dispatch(giveDonate(nicknamePresent, donate))
            }else{
                if(modeBuy){
                    dispatch(giveDonate(nicknamePresent, donate))
                }else{
                    dispatch(giveDonate(nickname, donate))
                }
                setNicknamePresent("")
            }
        }
    }, [buyButton])// eslint-disable-line react-hooks/exhaustive-deps

    function getPriceDonates(priceConst) {
        if (priceConst - donatePrice <= 0){
            return 0
        }else{
            if (donatePrice){
                return priceConst - donatePrice
            }else{
                return priceConst
            }
        }
    }

    const player = getPriceDonates(0)
    const vip = getPriceDonates(100)
    const admin = getPriceDonates(300)
    const op = getPriceDonates(500)

    let prise = player

    switch (donate) {
        case "Игрок":
            prise = player
            break
        case "Вип":
            prise = vip
            break
        case "Админ":
            prise = admin
            break
        case "Опка":
            prise = op
            break
        default:
            prise = player
    }

    return (
        <div className="all-donate">
            <section className="donate-page">
                <div className={!errorGetDonate ? "error-buy-donate" : "error-buy-donate error-buy-donate-active"}>
                    <div className="error-buy-donate-text">
                        {errorGetDonate}
                    </div>
                </div>
                <div className="donate-heading h1-block">
                    <div className="donate-heading-text h1-text">Донат</div>
                </div>
                <SlickSlider swipe={true}/>
                <div className="donate-opportunities">

                        {donate ==="Игрок" ?
                        <div className="opportunities-container">
                            <DonateOpportunities can={true} text={"Ничего"}/>
                            <DonateOpportunities can={false} text={"Что-то еще"}/>
                            <DonateOpportunities can={false} text={"Что-то еще"}/>
                            <DonateOpportunities can={false} text={"Что-то еще"}/>
                            <DonateOpportunities can={false} text={"Что-то еще"}/>
                            <DonateOpportunities can={false} text={"Что-то еще"}/>
                        </div>
                        :
                            donate ==="Вип" ?
                            <div className="opportunities-container">
                                <DonateOpportunities can={true} text={"Ничего"}/>
                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                <DonateOpportunities can={false} text={"Что-то еще"}/>
                                <DonateOpportunities can={false} text={"Что-то еще"}/>
                                <DonateOpportunities can={false} text={"Что-то еще"}/>
                            </div>
                                :
                                    donate ==="Админ" ?
                                    <div className="opportunities-container">
                                        <DonateOpportunities can={true} text={"Ничего"}/>
                                        <DonateOpportunities can={true} text={"Что-то еще"}/>
                                        <DonateOpportunities can={true} text={"Что-то еще"}/>
                                        <DonateOpportunities can={true} text={"Что-то еще"}/>
                                        <DonateOpportunities can={true} text={"Что-то еще"}/>
                                        <DonateOpportunities can={false} text={"Что-то еще"}/>
                                    </div>
                                        :
                                            donate ==="Опка" &&
                                            <div className="opportunities-container">
                                                <DonateOpportunities can={true} text={"Ничего"}/>
                                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                                <DonateOpportunities can={true} text={"Что-то еще"}/>
                                            </div>
                        }



                </div>
                <form className="buy-form-donate">
                    {isAuth ?
                    <div className="mode-form">
                        <div className={!modeBuy ? "mode-form-login mode-form-btn-active mode-form-btn" : "mode-form-login mode-form-btn"} onClick={(event) => {
                            setModeBuy(false)
                            setNicknamePresent(nicknamePresent)
                        }}>
                            Купить себе
                        </div>
                        <div className={!modeBuy ? "mode-form-nologin mode-form-btn" : "mode-form-nologin mode-form-btn mode-form-btn-active"} onClick={(event) => {
                            setModeBuy(true)
                            setNicknamePresent(nicknamePresent)
                        }}>
                            Купить в подарок
                        </div>
                    </div>
                    :
                        <div className="input-container-update-nickname">
                            <input autoComplete="on" type="text" className="nickname-text-donate" placeholder="Никнейм" value={nicknamePresent} onChange={(event => setNicknamePresent(event.target.value))}/>
                            <div className="text-update-price-block" onClick={event => {
                                setUpdateButtonState(true)
                                setTimeout(()=>{
                                    setUpdateButtonState(false)
                                },300)
                                setUpdateButton(event)
                            }}>
                                <div className="update-price-text">
                                    Обновить цены
                                </div>
                                <div className="update-price-svg">
                                    <svg version="1.1" className={updateButtonState ? "update-price-svg-image" : "update-price-svg-image rotate-animation"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 477.867 477.867">
                                        <g>
                                            <g>
                                                <path className="update-price-svg-icon" d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479
                                                c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933
                                                c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207
                                                c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4
                                                C426.667,7.641,419.026,0,409.6,0z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path className="update-price-svg-icon" d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696
                                                c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606
                                                c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4
                                                c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068
                                                c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    }
                    {modeBuy ? isAuth &&
                        <div className="input-container-update-nickname">
                            <input autoComplete="on" type="text" className="nickname-text-donate" placeholder="Никнейм" value={nicknamePresent} onChange={(event => setNicknamePresent(event.target.value))}/>
                            <div className="text-update-price-block" onClick={event => {
                                setUpdateButtonState(true)
                                setTimeout(()=>{
                                    setUpdateButtonState(false)
                                },300)
                                setUpdateButton(event)
                            }}>
                                <div className="update-price-text">
                                    Обновить цены
                                </div>
                                <div className="update-price-svg">
                                    <svg version="1.1" className={updateButtonState ? "update-price-svg-image" : "update-price-svg-image rotate-animation"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 477.867 477.867">
                                    <g>
                                        <g>
                                            <path className="update-price-svg-icon" d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479
                                                c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933
                                                c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207
                                                c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4
                                                C426.667,7.641,419.026,0,409.6,0z"/>
                                        </g>
                                    </g>
                                                                <g>
                                        <g>
                                            <path className="update-price-svg-icon" d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696
                                                c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606
                                                c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4
                                                c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068
                                                c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>
                                        </g>
                                    </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="nickname-text-donate-login">
                            {nickname}
                        </div>
                    }

                    {prise !== 0 ?
                        <div className="price-donate">{donate} - <span>{prise}</span>руб.</div>
                    : <div className="price-donate">{donate} - <span>Приобретено!</span></div>}

                    <button className="buy-btn-donate-block">
                        <div className="buy-btn-donate-text" onClick={(event)=> {
                            event.preventDefault()
                            setBuyButton(event)
                        }}>Купить</div>
                    </button>
                </form>
            </section>

        </div>
    );
};

export default AllDonate;