
import React, { useState } from 'react'
import {data} from './navdata'
import './nav.css'

const Nav = () => {
    const [sidebar,setsidebar]=useState(false);
     const setting=()=>{
         setsidebar(!sidebar);
     }
    return ( 
        <>
     <div className="">
         <a href="#" className="bar"><i class="fas fa-bars" onClick={setting}></i></a>
     </div>
     <nav className={sidebar ? 'navs active' : 'navs'}>
         <ul className="item" >
             <li className="list">
              <a href="" className="links">
              <i class="fas fa-times"></i>
              </a>
             </li>
             {
               data.map((items,index)=>{
                 return (   <>
                            <li className={items.cName}>
                            <a href="" className="dec">{items.icon}
                            <span className="title">{items.title}</span></a> 
                            </li>
                            </>
                            
                )
            })
             }
         </ul>
     </nav>
        </>
     );
}
 
export default Nav;