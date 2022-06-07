import React, { Component } from 'react'
import  Counter from './counter';
class Counters extends Component {

    render() { 
        // const {onDelete,Onincrement,reset,counters}=this.props;can also do like this and remove this.props 
        // from everywhere
        return ( 
            <div>
                <button onClick={this.props.reset} className="btn btn-md btn-primary">Reset</button>
    {this.props.counters.map
    (counter=>(<Counter 
        onDelete={this.props.onDelete} 
        onIncrement={this.props.onIncrement}
        key={counter.id} 
        value={counter.value} 
        id={counter.id}         
        counter={counter}
        />))}
            </div>
         );
    }
}
 
export default Counters;