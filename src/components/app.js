import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../assets/css/app.css';
import AddItem from './add-items';
import axios from 'axios';
import List from './list.js';
import listData from '../helpers/list_data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=borabora';

// only App can change list data deletion/ update/ " the thing that owns the data controls the data "

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: []
        };
    }
    // after component is mounted it will re render from this 
    componentDidMount() {
        this.getListData();
    }

    async deleteItem(id) {
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();

        }


    async addItem(item){
        await axios.post(`${BASE_URL}/todos/${API_KEY}`, item);

        this.getListData();
    }

    async getListData() {
        try {
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            this.setState({
                listData: response.data.todos
            });
        } catch(err) {
            console.log('ERROR:',err.message);
        }
    }
    


    render(){
        return (
           
                <div className="container" className="card-panel purple lighten-1">
                    <h1 className="center">To Do List</h1>
                    <AddItem add={this.addItem.bind(this)} />
                    <List data={this.state.listData} delete={this.deleteItem.bind(this)} />
                </div>
           
        );
    }
}




    export default App;
