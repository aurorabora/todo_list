import React from 'react';
import listData from '../helpers/list_data';

export default props => {
    if(!props.data.length){
        return <h1 className="center white-text"> No To Do Items </h1>
    }
    
    console.log('List Data:', props.data);

    const listElements =props.data.map((item, index) =>{  //always dom create through maps
            return( 
            <li key={index} className="collection-item">
            <div className="col s10">
                {item.title}
            </div>
            <div className="col s2 right-align">
                <button onClick={() => {props.delete(index)}} className='btn red darken-2'>Delete</button>
            </div>
            </li>
            )
    });

    return(
        <div>
            <h3> To Do </h3>
            <ul className="collection">
                {listElements}
            </ul>
        </div>
    )  
}
