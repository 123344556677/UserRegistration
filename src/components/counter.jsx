import React, { Component } from 'react';

class Counter  extends Component {
  // state={
  //   value:this.props.counter.value,
  //   tag:["tag1","tag2"],
  //   imageUrl:"banana.png"
  // };
//   constructor () {
// super();
// this.increment=this.increment.bind(this);
//   };    instead of using constructor we can use arrow function to do constructor work 
  // increment=()=>{
  //   this.setState({value:this.state.value+1});
  // };
  

  styles={
    color:"red"
  };
  // tagshelper(){
  //   if(this.state.tag.length===0) return <p>No tags</p>;
  //   return <ul>
  //   {this.state.tag.map(tag=><li key={tag}>{tag}</li>)}
  // </ul>;
  // }
      render() { 
        
        return (
          <div>
            {/* props child is use to pass data between elements */}
          {this.props.children}
          {/* <img src={this.state.imageUrl} alt=""/> */}
          <span style={this.styles} className={this.badgeclasses()}>{this.formatcount() }</span>
          {/* <span></span> */}
          {/* <span style={{color:"blue"}}>{this.formatcount()}</span> for inline styling  */}
          {/* <button onClick={()=>this.increment({id:1})} className="btn btn-secondary btn-sm m-2">Increment</button> */}
          {/* <button onClick={this.increment} className="btn btn-secondary btn-sm m-2">Increment</button> */}
          <button onClick={()=>this.props.onIncrement(this.props.counter)}
             className="btn btn-secondary btn-sm m-2">Increment</button>
          <button 
          onClick={()=>this.props.onDelete(this.props.counter.id)} 
          className="btn btn-sm btn-danger">
            Delete
             </button>
          {/* {this.state.tag.length===0 && "there are no tags"} */}
          {/* {this.tagshelper()} */}
          </div>
        );
    }
  badgeclasses() {
    let classes = "badge m-2 badge-"; 
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

    formatcount(){
      const {value}=this.props.counter;
      return value===0?"zero":value;
      // we can also return jsx expression here like h1 or div something
    }
}
 
export default Counter;
// state contains object is an property for the data required in component