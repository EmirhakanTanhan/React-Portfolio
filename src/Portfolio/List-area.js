import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Card1 from "../Components/Card-1";
import {useSelector} from "react-redux";

const ListArea = () => {
    const curr_url = window.location.pathname;

    const work = useSelector((state) => state.work);

    return (
        <div className="list-area">
            <Card1 props={work} url={curr_url}/>
        </div>
    );
};

export default ListArea;