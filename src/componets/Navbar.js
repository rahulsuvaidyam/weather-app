import React from "react";


const  Navbar = (porps) => {
   
    return(
        <nav className=" bg-info">
        <div className="container-fluid ">
        <h4 className="navbar">{porps.title}</h4>
        </div>
      </nav>
      
    )
}

export default Navbar