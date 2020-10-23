import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams, Link, Switch, Route} from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

const UserId = () => {
    const [userInfo, setUserInfo] = useState({});
    const {id} = useParams();
    console.log(id);
    const getUserInfo = async () => { 
        let res = await fetch ('https://jsonplaceholder.typicode.com/users/' + id);
        let userInfo = await res.json();
        setUserInfo(userInfo);
    }

    useEffect(() => {
        getUserInfo();
    }, []);


return(
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group">
                    
                    <li key={userInfo.id} className="list-group-item d-flex justify-content-between align-items-center">Name: {userInfo.name}
                    </li>
                    <li key={userInfo.id} className="list-group-item d-flex justify-content-between align-items-center">Username: {userInfo.username}
                    </li>
                    <li key={userInfo.id} className="list-group-item d-flex justify-content-between align-items-center">Email: {userInfo.email}
                    </li>
                    <li key={userInfo.id} className="list-group-item d-flex justify-content-between align-items-center">Website: {userInfo.website}
                    </li>
                    </ul>
            </div>
        </div>
    </div>
);
}

export default UserId;