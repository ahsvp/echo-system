import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './list/List';
import Header from './components/Header';
import Footer from './components/Footer';


function Main_app(){
  return(
    <div className="app">
    <Header />
    <div className="app-body">
      <List/>
     
    </div>

    <Footer/>
    
  </div>
  )  

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
<Main_app/>



  
  </>

);


