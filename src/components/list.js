import React from 'react';
import listData from '../helpers/list_data';

export default props => {
    if(!props.data.length){
        return <h1 className="center white-text"> No To Do Items </h1>
    }
    
    console.log('List Data:', props.data);

    const listElements =props.data.map((item, index) =>{  //always dom create through maps
            return <li className="collection-item">{item.title}</li>
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
