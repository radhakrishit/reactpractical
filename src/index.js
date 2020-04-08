import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './myApp';
import ChildCreated from './childComp';
import * as serviceWorker from './serviceWorker';
import Demo from './demo';
import HelloWorld from './helloComp';
import jokesData from './jokesData';
import {LoadingPage} from './loadingPage';
import {AppLayout} from './appLayout';
import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter, Route,Switch,Link, NavLink, Prompt, Redirect} from "react-router-dom";
//import Route from 'react-router-dom/Route';

const User = (params) => {
  return (<h2> Welcome User {params.username}</h2>)
}

class Index extends Component{
  state = {
    loggedIn : false
  }
  loginHandle =() => {
    this.setState(prevState => ({
      loggedIn:!prevState.loggedIn
  }))
}
  render(){
      return(
          <div className  = "Index">
                      <ul>
                      <Link to = "/" > Home </Link>
                      <br/>
                      <Link to = "/about" > About </Link>
                      <br/>
                       <NavLink to = "/user/john" > U John </NavLink>
                      <br/>
                      <NavLink to = "/user/peter" > U Peter </NavLink>  
                    </ul>  

                    { <Prompt when={!this.state.loggedIn}
                    message = {(location) => {
                        return location.pathname.startsWith('/user')? 'R u sure?' : true
                     }} /> }

                    <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle}/>

                     <Route exact  path="/" exact strict render={ ()=> {
                       return(
                         <h1>  Welcome Home </h1>
                       )
                     }
                     }/> 
                     <Route exact path = "/user/:username" exact strict render = { ({match}) =>(
                       this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to ='/' />)
                     )}/> 
                     <h4>jjjj</h4>
                  </div>
)
                    }
}

// class Index extends Component{
//       constructor(){
//          super()
//          this.state={
//             firstName : "",
//             lastName : "",
//             age : "",
//             isFriendly : false,
//             gender : "",
//             favColor : "red",
//             destination : "",
//                isVegan : false,
//                isKosher : false,
//                isLactoseFree : false
//          }
//          this.handleChange = this.handleChange.bind(this)
//       }

//       handleChange(event){
//          const {name, value, type, checked} = event.target
//          type === "checkbox" ?
//          this.setState({
//             [name] : checked
//          }) : this.setState({
//             [name] : value
//          })
//       }

//       render(){
//          return(
//       <form onSubmit = {this.handleSubmit}>
//        <input type ="text" value={this.state.firstName} name="firstName" placeholder="First name" onChange={this.handleChange} />
//       <br/>
//       <input type ="text" value={this.state.lastName} name="lastName" placeholder="Last name" onChange={this.handleChange} />
//       <br/>
//       <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} />
//       <br/>
//       <label>
//          <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}/>Male
//       </label>
//       <br/>
//       <label>
//          <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}/>Female
//       </label>
//       <br/>
//       <label>
//          Destination
//       </label>
//             <select value={this.state.destination} onChange={this.handleChange} name="destination">
//                <option value=""> --Pls choose destn </option>
//                <option value="red"> Red </option>
//                <option value="yellow"> Yellow </option>
//                <option value="blue"> Blue </option>
//                <option value="green"> Green </option>
//                <option value="white"> White </option>
//             </select>
//             <br/>
//             <label>
//          <input type="checkbox" name="isVegan" checked={this.state.isVegan} onChange={this.handleChange}/> 
//                Vegan?
//       </label>
//       <br/>
//             <label>
//          <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange}/> 
//                Kosher?
//       </label>
//       <br/>
//             <label>
//          <input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree} onChange={this.handleChange}/> 
//                Lactose free?
//       </label>
//             <br/>
//                <hr/>
//             <h1> Entered Information </h1>
//          <h2> Ur name {this.state.firstName}{this.state.lastName}</h2>
//          <h5> ur age {this.state.age} </h5>
//          <h3> Yu are {this.state.gender} </h3>
//          <h6> Yu destn {this.state.destination}  </h6>
//          <h7> Yu dietary restrctn </h7>
//          <p> Vegan {this.state.isVegan ? "Yes" : "No"} </p>
//          <p> Kosher {this.state.isKosher ? "Yes" : "No"} </p>
//          <p> Lactose {this.state.isLactoseFree ? "Yes" : "No"} </p>
//          <br/>
//          <button>Submit</button>
//          <br/>
//             </form>
//          )
//       }
// }


// function DemoCreation(){
//   const jokeComponent = jokesData.map(demo => <Demo key={demo.id} que={demo.que} ans={demo.ans}/>)
//   return(
//     <div>
//       {jokeComponent}
//     </div>
//   )
// }

// function  Demo() {
//   const date = new Date(2020, 4, 1, 2, 41, 10)
//   const hrs = date.getHours()
//   let time

//   const styles = {
//     backgroundColor: "red",
//     fontSize : "50px"
//   }

//    if(hrs<12){
//        time ="morning"
//        styles.color = "purple"
//    }else{
//      time = "nyt"
//      styles.color="yellow"
//    }

//   return(
//       <h6 style = {styles}>Better {time}</h6>
//   )
// }

// function DemoChild(){
//  return(
//  <div id="demoChld">
//      <h1>1st step</h1>
       
//         <ul>
//         <input type="checkbox"></input>
//          <li>List tag val</li>
//          </ul>
//           <ChildCreated />  
//        </div> 
//        )
//      }
   
  //document.getElementById('root')
  //export default Index
  ReactDOM.render(<BrowserRouter><Index/></BrowserRouter>, document.getElementById("root"))


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();