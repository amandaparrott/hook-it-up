import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => { 
        let res = await fetch ('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);


return(
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className="list-group">
                    {users.map(user => (
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">{user.name}
                    <Link to={`/users/${user.id}`}>
                               <button type="button" className="btn btn-secondary align-self-shadow">
                                   Details
                                   </button>                           
                            </Link></li>
                    ))}
                    </ul>
            </div>
        </div>
    </div>
);
}

export default Users;