import React, {useEffect, useState} from 'react';
import "./modal.css"
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../actions/user";


const Modal = ({active, setActive}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const errorLogin = useSelector(state => state.user.error)
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(isAuth){
            setActive(false)
        }
    },[isAuth])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={active ? "modal active-modal" : "modal"}>
            <section className="modal-sigin-up">
                <div className="container-modal">
                    <div className="h1-modal-block">
                        <div className="h1-modal-text">Войти</div>
                    </div>
                    <div className="form-login-modal-block">
                        <form className="form-modal-login">
                            <input autoComplete="on" className="input-modal-sigin" type="text" placeholder="Логин" onChange={(event)=> setUsername(event.target.value)} value={username}/>
                            <input autoComplete="on" className="input-modal-sigin" type="password" placeholder="Пароль" onChange={(event)=> setPassword(event.target.value)} value={password}/>
                            <div className="message-modal-block">
                                <div className={errorLogin ? "message-modal-text message-modal-text-with-error" : "message-modal-text message-modal-text-no-error"}>
                                    {errorLogin}
                                </div>
                            </div>
                            <div className="btn-block-modal-sigin">
                                <button className="btn-modal-sigin" onClick={(event)=>{
                                    event.preventDefault()
                                    setPassword("")
                                    dispatch(registration(username, password))
                                }
                                }>Войти</button>
                            </div>
                        </form>
                    </div>
                    <div className="close-modal-container">
                        <div className="close-modal-block" onClick={()=>setActive(false)}>
                            <svg version="1.1" className="close-icon-modal" xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 viewBox="0 0 496.096 496.096">
					<g>
						<g>
							<path className="close-icon-modal-image" d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
								L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
								c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
								l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
						</g>
					</g>
					</svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className="background-modal" onClick={()=>setActive(false)}/>
        </div>
    );
};

export default Modal;