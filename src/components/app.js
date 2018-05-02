import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/app.css';
import List from './list.js'


const App = () => (
    <div>
        <div className="container" className="card-panel purple lighten-1">          
            <h1 className="center">To Do List</h1>
            <List/>
        </div>
    </div>
);

export default App;
