import React from 'react';
import ListItem from './ListItem'

function SimpleList({ arr, handleDelete }){
    return(
        <div className="app-list">
        {arr.map((obj) => (
          <ListItem
            key={obj.title}
            title={obj.title}
            discription={obj.discription}
            isactive={obj.isactive}
            onDelete={() => handleDelete(obj.title)}
          />
        ))}
      </div>

    )
}




export default SimpleList;