
import './App.css';
import Add from './Components/Add';
import Cards from './Components/Cards';
import { useState } from 'react';
import  {Routes,Route } from 'react-router-dom'; 
import AddProduct from './Components/AddProduct';
import Home  from './Components/Home';


function App() {
  

  const [item, setItem] = useState({title:"", description:"", price:""});
  
  const changeItem = (e) =>{
    setItem ({...item,[e.target.name]: e.target.value})
  }

  

  
  const[modal, setmodal] = useState (false)
  const  clicked=()=>{
   setmodal((value)=> !value);
    
  
  
  }
  return (
    <>
    <Add btnclicked ={clicked}/>
    
    {/* < Cards/> */}
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addnew' element={<AddProduct/>}/>
   </Routes>

    { modal &&<div className="popup">
    <div className="app">
    <a href=""><h1>x</h1></a>
      <h3>new product </h3>
     
      <div className="inputs">
         <form action="">
          <input onChange={changeItem} name='title' type="text" placeholder='title'id='input' /> <br />
         <textarea onChange={changeItem}  name='description' id="textarea" cols="37" rows="5" placeholder='add description' ></textarea>
          <input onChange={changeItem} name='price' type="text" placeholder='price' id='price' /> <br />
          <button> Add</button>

          product to be added {JSON.stringify(item)}
          
        </form>
        </div>
      </div>
    </div>}
    
    </>
  );
  
}

export default App;
