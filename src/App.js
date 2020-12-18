import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MainPage from "./components/main/MainPage";
import Article from "./components/article/Article";
import {quickStart} from "./data/articles/quick-start";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/doc">
                        <Article content={quickStart}/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
