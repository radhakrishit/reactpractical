import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component{
    constructor(){
       super()
       this.state={
          firstName : "",
          lastName : "",
          age : "",
          isFriendly : false,
          gender : "",
          favColor : "red",
          destination : "",
             isVegan : false,
             isKosher : false,
             isLactoseFree : false
       }
       this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
       const {name, value, type, checked} = event.target
       type === "checkbox" ?
       this.setState({
          [name] : checked
       }) : this.setState({
          [name] : value
       })

    }

    render(){
       return(
    <form onSubmit = {this.handleSubmit}>
     <input type ="text" value={this.state.firstName} name="firstName" placeholder="First name" onChange={this.handleChange} />
    <br/>
    <input type ="text" value={this.state.lastName} name="lastName" placeholder="Last name" onChange={this.handleChange} />
    <br/>
    <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} />
    <br/>
    <label>
       <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}/>Male
    </label>
    <br/>
    <label>
       <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}/>Female
    </label>
    <br/>
    <label>
       Destination
    </label>
          <select value={this.state.destination} onChange={this.handleChange} name="destination">
             <option value=""> --Pls choose destn </option>
             <option value="red"> Red </option>
             <option value="yellow"> Yellow </option>
             <option value="blue"> Blue </option>
             <option value="green"> Green </option>
             <option value="white"> White </option>
          </select>
          <br/>
          <label>
       <input type="checkbox" name="isVegan" checked={this.state.isVegan} onChange={this.handleChange}/> 
             Vegan?
    </label>
    <br/>
          <label>
       <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange}/> 
             Kosher?
    </label>
    <br/>
          <label>
       <input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree} onChange={this.handleChange}/> 
             Lactose free?
    </label>
          <br/>
             <hr/>
          <h1> Entered Information </h1>
       <h2> Ur name {this.state.firstName}{this.state.lastName}</h2>
       <h5> ur age {this.state.age} </h5>
       <h3> Yu are {this.state.gender} </h3>
       <h6> Yu destn {this.state.destination}  </h6>
       <h7> Yu dietary restrctn </h7>
       <p> Vegan {this.state.isVegan ? "Yes" : "No"} </p>
       <p> Kosher {this.state.isKosher ? "Yes" : "No"} </p>
       <p> Lactose {this.state.isLactoseFree ? "Yes" : "No"} </p>
       <br/>
       <button>Submit</button>
       <br/>
          </form>
       )
    }
}

export default Form