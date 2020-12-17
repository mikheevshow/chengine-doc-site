import React from 'react'
import './MainPage.css'
import {Button} from "reactstrap";
import {advantages} from "./advantages-data";
import ReactHtmlParser from 'react-html-parser';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-page">
                <div className="main-page-landing">
                    <div>
                        <p className="h1">Chengine</p>
                        <p>Удобный Java фреймворк для создания чат ботов</p>
                    </div>
                    <div className="main-page-langing-buttons">
                        <Button className="m-3 btn btn-warning text-dark">Начало работы</Button>
                        <Button className="m-3 btn btn-warning text-dark">Рецепты</Button>
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