import React from 'react'
import './MainPage.css'
import {advantages} from "./advantages-data";
import ReactHtmlParser from 'react-html-parser';
import Card from "./Card";
import './Card.css'
import {cards} from "./cards-data";
import {Link} from "react-router-dom";

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-page">
                <div className="main-page-landing">
                    <div>
                        <h1>Chengine</h1>
                        <p>Java фреймворк для создания чат ботов</p>
                    </div>
                    <div className="main-page-landing-buttons">
                        {cards.map(item => {return (<Card {...item}/>)})}
                    </div>
                </div>
                <div className="main-page-advantages">
                    {advantages.map(item => {
                        return (
                            <section className="main-page-advantages-item">
                                <h4 className="title text-left mb-4">{ReactHtmlParser(item.title)}</h4>
                                <p className="text text-left">{ReactHtmlParser(item.content)}</p>
                            </section>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MainPage