import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);

        this.state ={
            title:'',
            details:''
        };
    }

    handleAddItem(event){
        event.preventDefault();
        console.log('Item:', this.state);

        this.props.add(this.state);

        this.setState({
            title:'',
            details:''
        })
    }

    render() {

        const {title, details}=this.state;

        return (
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                    <label> title</label>
                        <input value ={title} type="text" onChange={(event) => {this.setState({title:event.target.value})}} />
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m8 offset-m2">
                    <label> details</label>
                        <input value = {details} type="text" onChange={ event => this.setState({details: event.target.value})} />
                    </div>
                </div>
                <div className="center-align">
                    <button className="btn purple accent-1"> add Item </button>
                </div>
                
            </form>
        )
    }
}

export default AddItem;