import React, { useEffect, useState } from 'react';
import './Home.css'
import SingleData from './SingleData';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data);
    return (
        <div className="card-area">
            <div className="card-container">
                {
                    data.map(singleData => <SingleData details={singleData} key={singleData.id}></SingleData>)
                }
            </div>
        </div>



    );
};

export default Home;