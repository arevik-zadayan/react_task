import React, {useContext} from 'react';
import classes from "./Home.module.css";
import Card from "./Card/Card";
import {useHistory} from "react-router-dom";
import {DataContext} from "../../Context/DataContext";

const Home = () => {
    const {setTitle, loading, setLoading} = useContext(DataContext);

    const history = useHistory();

    const handleMovies = () => {
        history.push("/movies");
        setTitle("Movies")
        setLoading(true)
    }

    const handleSeries = () => {
        history.push("/series");
        setTitle("Series")
        setLoading(true)
    }

    return (
        <div className={`${classes.home} container`}>
            {loading ?
                <span>Loading...</span>
                :
                <>
                    <Card name="Series" onClick={handleSeries}/>
                    <Card name="Movies" onClick={handleMovies}/>
                </>
            }
        </div>
    );
};

export default Home;