import React, { useState,useEffect} from 'react';
import ListItem from './ListItem'; // Import the ListItem component
import Tools from '../components/tools'; // Import your Tools component
import SimpleList from './SimpleList'
import './listitem.css'; // for ListItem component
import './list.css'; // for List component
import JustInfo from './JustInfo';


let initialData = [
  {
    title: "appointment for September",
    discription: "The patient is scheduled for September.",
    label: 'first label',
    isactive: true
  },
  {
    title: "appointment for October",
    discription: "The patient is scheduled for October.",
    label: 'first label',
    isactive: false
  },
  {
    title: "appointment for November",
    discription: "The patient is scheduled for November.",
    label: 'first label',
    isactive: true
  },
  {
    title: "appointment for December",
    discription: "The patient is scheduled for December.",
    label: 'first label',
    isactive: false
  }
];

function List() {
    useEffect(()=>{
        console.log('hallo')
    })
  // Set the initial data into state using useState hook
  const [arr, setArr] = useState(initialData);

  // Function to handle filtering based on selection (active, non-active, all)
  const onListChange = (evt) => {
    const value = evt.target.value;
    setFilter(value); // Update the filter state with the selected value
  
    // Filter the list based on the selected filter
    const newList = initialData.filter((item) => {
      if (value === 'all') return true;
      if (value === 'active') return item.isactive === true;
      if (value === 'non active') return item.isactive === false;
      return false;
    });
  
    setArr(newList); // Update the state with the new filtered list
  };
  const [filter, setFilter] = useState('all'); // Track the current filter value
  

  // Function to handle deleting an item
  const handleDelete = (title) => {
    const newList = arr.filter(item => item.title !== title);
    setArr(newList); // Remove the item from the list by title
  };
  onCall =()=>{
console.log('just info')
  }
  return (
    <div>
  <JustInfo onCall={onCall1} />
    <Tools OnAction={onListChange} a ={filter}>
        
      <SimpleList arr={arr} handleDelete={handleDelete} />
    </Tools>
    </div>
  );
}

export default List;
