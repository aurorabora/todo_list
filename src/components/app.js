import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../assets/css/app.css';
import AddItem from './add-items';
import List from './list.js';
import listData from '../helpers/list_data';

// only App can change list data deletion/ update/ " the thing that owns the data controls the data "

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: []
        };
    }
    // after component is mounted it will re render from this 
    componentDidMount(){
        this.getListData();
    }

    addItem(item){
        this.setState({
            listData: [item, ...this.state.listData]
        });
    }

    getListData(){
        setTimeout(() => {
            this.setState({ listData: listData });   
        }, 500);  
    }


    render() {
        return (
            <div>
                <div className="container" className="card-panel purple lighten-1">
                    <h1 className="center">To Do List</h1>
                    <AddItem add={this.addItem.bind(this)}/>
                    <List data={this.state.listData}/>
                </div>
            </div>
        );

    }
}


export default App;
