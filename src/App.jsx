import React, { useState,useEffect } from 'react';
import './App.css';
import ocean from './ocean.png';
import Form from './Registration/Form';
import {Spring} from 'react-spring';
import Home from './Registration/Home/Home';
import {AnimatePresence,motion} from 'framer-motion/dist/framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[color,setcolor]=useState(true);
  // const logged=JSON.parse(localStorage.getItem('loggedin'));
  const[logged,setlogged]=useState(JSON.parse(localStorage.getItem('loggedin')));
  const getvalue=()=>{
    setcolor(!color);
      console.log("value coming",color);
    }
    const[Homes,sethome]=useState("nothome");
  const gethomevalue=()=>{
    setlogged(true);
      console.log("value coming",Homes);
      //  toast.success("Login Successful",{
      //          position:"top-center"
      //        })
    }
    const gethomevalues=()=>{
    setlogged(false);
      console.log("value coming",logged);
    }
    
  return (
    
    <>
    
    
      {
        
      logged?
      <motion.div className=""
       initial={{width:0}}
    animate={{width:"100%",transition:{duration:0.5}}}
    exit={{x:window.innerWidth,transition:{duration:0.4}}}>
     <Home navhomevalues={gethomevalues}/>
     
     </motion.div>
       
   :
   
  <div className="" style={{backgroundImage:`url(${ocean})`, height:"700px",position:"relative"}}>
    {
      color?
            <AnimatePresence>
       <motion.div className="layer"
        
        initial={{width:0}}
    animate={{width:"100%",transition:{duration:0.2}}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}>
          
<AnimatePresence>
  <Form value={getvalue} homevalues={gethomevalue}/>
</AnimatePresence>

   </motion.div>
    </AnimatePresence> 
   : 
    <AnimatePresence>
       <motion.div className='layer2'
       
        initial={{width:0}}
    animate={{width:"100%",transition:{duration:0.2}}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}>
          
<AnimatePresence> 
  <Form value={getvalue}/>
</AnimatePresence>

   </motion.div>
   </AnimatePresence>
    } 
    
      
    </div> 
}

<ToastContainer/>
  </>
  );
    }
export default App;
























// ./components/counters
// ./components/navbar
// ./components/nav/nav

// import React, { Component } from 'react';
// import Navbar from './navbar';
// import  Counters from './counters';
// import Nav from './nav/nav';
// import 'bootstrap/dist/css/bootstrap.css';
// class App extends Component {

    // state = { 
    //     counters:[
    //         {id:1, value:3 },
    //         {id:2, value:4},
    //         {id:3, value:5 },
    //         {id:4, value:6},
    //     ]
    //  };
    //  increment=counter=>{
    //  const counters=[...this.state.counters];
    //  const index=counters.indexOf(counter);
    //  counters[index]={...counter};
    //  counters[index].value++;
    //  this.setState({counters});
    //  };

    //  reset=()=>{
    //  const counters=this.state.counters.map(c=>
    //     {c.value=0;
    //     return c;
    // })
    // this.setState({counters:counters})
    //  };
    //  dela= counterId =>{
    // const counters=this.state.counters.filter(c=>c.id!==counterId);
    // this.setState({counters:counters});
    //  };
    
    
//     render() { 
//         return ( 
//           <>
//           <Nav/>
//           </>
//            );
//     }
// }
 
// export default App;
// <React.Fragment>
                
            /* <Navbar totalcounters={this.state.counters.filter(c=>c.value>0).length}
            />
            <div className="container">
                <Counters
                reset={this.reset}
                counters={this.state.counters}
                onDelete={this.dela} 
                onIncrement={this.increment}/>
             </div> */
            // </React.Fragment>
        