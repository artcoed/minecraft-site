import React from 'react';
import "./rulesPage.css"
import OneRules from "./oneRules/OneRules";

const RulesPage = () => {
    return (
        <div className="Rules-page">
            <section className="rules-page">
                <div className="rules-container-page">
                    <div className="h1-rules">
                        <div className="h1-rules-text">Правила</div>
                    </div>
                </div>
                <div className="rules-content-container">
                    <OneRules heading={"Привет"} content={"Пока"}/>
                    <OneRules heading={"Привет"} content={"Пока"}/>
                    <OneRules heading={"Привет"} content={"Пока"}/>
                    <OneRules heading={"Привет"} content={"Пока"}/>
                    <OneRules heading={"Привет"} content={"Пока"}/>
                    <OneRules heading={"Привет"} content={"Пока"}/>
                </div>
            </section>
        </div>
    );
};

export default RulesPage;