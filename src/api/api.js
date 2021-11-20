import React, {useContext, useEffect} from 'react';
import {DataContext} from "../Context/DataContext";

const Api = () => {
    const {setData, loading, setLoading, setErr} = useContext(DataContext);

    const getData = () => {
        fetch("feed/sample.json"
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                if (response.ok) {
                    return response.json();

                }
            })
            .then(function (myJson) {
                setData(myJson.entries)
                setLoading(false)

            })
            .catch(function (error) {
                setErr(error)
                setLoading(false)

            })
    }

    useEffect(() => {
        getData()
    }, [loading])

    return (
        <div>

        </div>
    );
};

export default Api;