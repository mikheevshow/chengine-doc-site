import React from 'react'
import './MainPage.css'
import {mainPageSnapshot} from "./main-page-snapshot"
import ReactHtmlParser from 'react-html-parser';
import Card from "./Card";
import './Card.css'
import CodeBlock from "./code/CodeBlock";

class MainPage extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="main-page">
                    <div className="main-page-landing">
                        <div>
                            <h1>Chengine</h1>
                            <p className="main-page-landing-p">Java фреймворк для создания чат ботов 🤖</p>
                        </div>
                        <div className="main-page-landing-buttons">
                            {mainPageSnapshot.cards.map(item => {
                                return (<Card {...item}/>)
                            })}
                        </div>
                    </div>

                    <div className="main-page-advantages">
                        {mainPageSnapshot.advantages.map(item => {
                            return (
                                <section className="main-page-advantages-item">
                                    <h4 className="title text-left mb-4">{ReactHtmlParser(item.title)}</h4>
                                    <p className="text text-left">{ReactHtmlParser(item.content)}</p>
                                </section>
                            )
                        })}
                    </div>

                    {mainPageSnapshot.codeExamples.map(item => {
                        return (<CodeBlock {...item}/>)
                    })}

                </div>
            </div>
        )
    }
}

export default MainPage