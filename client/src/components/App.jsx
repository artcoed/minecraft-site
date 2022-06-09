import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {auth} from "../actions/user";
import "./app.css"
import Header from './header/Header'
import Footer from "./footer/Footer";
import AllNews from "./allNews/AllNews";
import RulesPage from "./rulesPage/RulesPage";
import AllDonate from "./allDonate/AllDonate";
import Profile from "./profile/Profile";
import NewsOnePage from "./newsOnePage/NewsOnePage";
import {CSSTransition} from "react-transition-group";
import LineHeader from "./lineHeader/LineHeader";
import MainPageAll from "./mainPageAll/MainPageAll";



function App() {
    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState(false)
    useEffect(()=>{
        dispatch(auth())
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    const routes = [
        {path: '/news', name: 'AllNews', Component: AllNews},
        {path: '/rules', name: 'RulesPage', Component: RulesPage},
        {path: '/donate', name: 'AllDonate', Component: AllDonate},
        {path: '/profile', name: 'Profile', Component: Profile},
        {path: '/news-1', name: 'NewsOnePage', Component: NewsOnePage},
        {path: '/', name: 'MainPageAll', Component: MainPageAll},
    ]
    return (
        <BrowserRouter>
            <div className='app'>
                <div className="container-alll">
                    <Header setModalActive={setModalActive} modalActive={modalActive}/>
                    {routes.map(({path, Component}) =>
                        <Route key={path} exact path={path}>
                            {({match}) =>
                                    <CSSTransition
                                        in={match != null}
                                        timeout={1000}
                                        classNames="page"
                                        unmountOnExit

                                    >
                                        <div className="page">
                                            <LineHeader/>
                                            <Component setModalActive={setModalActive} modalActive={modalActive}/>
                                            <Footer/>
                                        </div>
                                    </CSSTransition>
                                }
                        </Route>
                    )}
                </div>
            </div>
        </BrowserRouter>
    );


}

export default App;

