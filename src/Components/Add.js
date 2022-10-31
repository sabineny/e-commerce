import React from "react"
import {Link} from 'react-router-dom'
const Add=(props) =>{
 
    return(
        <>
        
        <nav className="navbar navbar-expand-lg">
  <div className="container-md">
    <h1>food delivery</h1>
  </div>
  
  <Link to="/">home</Link>
  <Link to="/addnew" classNme="btn btn-primary">Add Product</Link>
  
</nav>



        </>
    )
}

export default Add