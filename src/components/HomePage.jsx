import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

const HomePage = () => {
    return(
        <div>
        <div className="container my-2 justify-content-center">
      <div className="card row my-4 shadow">
        <div className="card-header text-center">Welcome to this fake site!</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0 text-center">
            <p>Use the buttons above to navigate through fake information!</p>
          </blockquote>
        </div>
      </div>
      </div>
    </div>
    )
}

export default HomePage;