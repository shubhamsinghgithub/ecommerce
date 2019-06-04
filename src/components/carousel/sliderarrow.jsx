import React from'react'
import {FaChevronLeft,FaChevronRight,} from 'react-icons/fa'

export default ({to,onClick})=>{
    let component="";
    if(to=="prev")
    component=<button className="custom-carousel-bleft" type="button" onClick={onClick} aria-label={to}><FaChevronLeft/></button>;
    else if(to=="next")
    component=<button className="custom-carousel-bright" type="button" onClick={onClick} aria-label={to}><FaChevronRight/></button>;
    
    return(
    <div>
        {component}
    </div>    
    );
}