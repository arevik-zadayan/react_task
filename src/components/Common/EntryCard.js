import React from 'react';
import classes from "./EntryCard.module.css";

const EntryCard = ({title, img}) => {
    return (
        <div className={classes.entry_card}>
            <div className={classes.img_block}>
                <img src={img} alt="img"/>
            </div>
            <p>{title}</p>
        </div>
    );
};

export default EntryCard;