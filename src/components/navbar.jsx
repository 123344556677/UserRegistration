import React, { Component } from 'react'
class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    Navbar
                <span className="badge-primary badge-pill">{this.props.totalcounters}</span>
                </a>
            </nav>
            
         );
    }
}
 
export default Navbar;