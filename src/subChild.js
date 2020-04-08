import React, { Component } from 'react';
//import logo from './logo192.png';

class SubChild extends Component{

    state = {name:''}

    changeName=(event)=>{
        const{target}=event;
        this.setState({name:target.value})
    }
    changeEmail=(event)=>{
        const{target}=event;
        this.setState({email:target.value})
    }

    clickEvent=()=>{
        this.props.addUser(this.state.name);
        this.props.addUser(this.state.email);
        this.setState({name:''});
        this.setState({email:''});
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.email}</h2>
                <input value = {this.state.name} onChange={this.changeName}/>
                <br/>
                <input value = {this.state.email} onChange={this.changeEmail}/>
                <br/>
                <button onClick={this.clickEvent}> Add</button> 
            </div>
        )
    }

}



// function SubChild(props){
// return(
//     <div>
//         <h1>{props.name}</h1>
//         <input value ={props.name} onChange={props.changeEvent}/>
//     </div>
// )
// }

export default SubChild;