import React from 'react';
import Label from './Label'; // Assuming you have a Label component for the active status
import './listitem.css'; // for ListItem component
import './list.css'; // for List component

function ListItem({ title, discription, isactive, onDelete }) {
  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h2>{title}</h2>
      </div>
      
      {/* Positioned delete label in the top-right corner */}
      <label className="delete" onClick={onDelete}>
        delete
      </label>

      <div className="list-discription">
        {discription}
      </div>

      {/* Pass 'isactive' to the Label component to indicate if it's active */}
      <Label isactive={isactive} /> 

      <hr />
    </div>
  );
}

export default ListItem;
