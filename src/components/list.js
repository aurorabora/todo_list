import React from 'react';
import listData from '../helpers/list_data';

export default props => {
    
    console.log('List Data:', listData);

    const listElements =listData.map((item, index) =>{  //always dom create through maps
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
