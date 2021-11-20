import React, {useContext} from 'react';
import classes from "./Header.module.css"
import {useHistory} from "react-router-dom";
import {DataContext} from "../../Context/DataContext";

const Header = () => {
    const {title, setTitle} = useContext(DataContext);

    const history = useHistory();

    const handleHome = () => {
        history.push("/");
        setTitle("Title")
    }

    return (
        <header>
            <nav className={`container`}>
                <div onClick={handleHome} className={classes.nav_brand}>
                    <h1>DEMO Streaming</h1>
                </div>
                <div className={classes.nav_item}>
                    <a>Log In</a>
                    <button>Start your free trial</button>
                </div>
            </nav>
            <div className={classes.title_bar}>
                <div className={`container`}>
                    <h2>Popular {title}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;