import React, {useContext} from 'react';
import {DataContext} from "../../Context/DataContext";
import EntryCard from "../Common/EntryCard";
import classes from "./Series.module.css";

const Series = () => {
    const {data, loading, err} = useContext(DataContext);

    const series = data
        .filter(item => (item.releaseYear >= 2010) && (item.programType === "series"))
        .sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        })
        .slice(0, 21)
        .map((item,index) => {
            return (<EntryCard key={index} title={item.title} img={item.images['Poster Art'].url}/>)
        });

    return (
        <div className={`${classes.series} container`}>
            {loading ? <span>Loading...</span> : err ? <span>Oops something went wrong...</span> : <>{series}</>}
        </div>
    );
};

export default Series;
