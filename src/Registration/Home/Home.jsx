import React from 'react'
import home from './homes.png';
import  './Home.css';
import Navbar from './Navbar';
import Main from './Main';
const Home = (props) => {
  return (
   
<div className="back"  style={{backgroundImage:`url(${home})`, height:"850px",position:"relative",opacity:1}}>
<div className="homelayer">
<Navbar navvalues={props.navhomevalues}/>
<Main/>
</div>

    </div>
  
  )
}

export default Home;