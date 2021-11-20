import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Api from "./api/api";
import {DataContext} from "./Context/DataContext";
import {useState} from "react";
import Series from "./components/Series/Series";
import Movies from "./components/Movies/Movies";

function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("Title");
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState();
    return (
        <DataContext.Provider value={{
            data,
            setData,
            title,
            setTitle,
            loading,
            setLoading,
            err,
            setErr
        }}>
            <div className="App">

                <Header/>
                <Api/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/series' exact component={Series}/>
                    <Route path='/movies' exact component={Movies}/>
                    <Route path='/404' exact component={Home}/>
                    <Redirect to='/404'/>
                </Switch>
                <Footer/>
            </div>
        </DataContext.Provider>
    );
}

export default App;
