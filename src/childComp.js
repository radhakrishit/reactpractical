import React from 'react';
import SubChild from './subChild';
import jokesData from './jokesData';

// function ChildCreated(props){
//     return(
//         <div>
//             <h8>Child Compnt</h8>
//         </div>
//     )
// }

var jokerData = [
    {
      name:"www",
      email: "www@gmail.com"
    },
    {
      name:"yyy",
      email : "yyy@gmail.com"
    }
]

class ChildCreated extends React.Component{

//constructor(){
//super();
    state = {
        jokerDataList : ['rock','star']
    }
    
    //this.handleClick = this.handleClick.bind(this)
    //}
    changeEvent = (event) => {
        this.setState ({name:event.target.value})
    }

    addUser = (name,email) => {
        var list = this.state.jokerDataList;
        list.push(name);
        this.setState({jokerDataList:list})
    }

    show=()=>{
        var obj=[];
        for(var item of this.state.jokerDataList){
            obj.push(<tr>
            <td> {item.name} </td>
        </tr>)
         }
         return obj;
     }
    render(){
        return(
            <div>
                <hr/>
                <table>
                <caption> Table </caption>
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>uuu</td>
    <td>$uuu@gmail.com</td>
  </tr>
  <tr>
    <td>vvv</td>
    <td>vvv@gmail.com</td>
  </tr>
  
</table>
        {/* <input value = {this.state.name} onChange = {this.changeEvent} />
        <button onClick = {this.handleClick}> Change!</button>
        <h7> {this.state.name} </h7> */}
        {this.show()}
        <SubChild addUser={this.addUser} />
        <br/>
        <br/>
        
            </div>
        );
    }
 }

//  function ChildCreatedProp(props){
//           render(
//               <div>
//                   <input value = {this.props.name} />
//               </div>
//           )
// }

// const ChildCreated=(props) =>  {
//     const first = "MS"
//     const second = "dhoni R"
//     const date = new Date()
// return <div>

// <div className="contact">
// <h4> {date.getHours() % 12} pm !</h4>
// <h5>ChildCreationDone {`${first} ${second}` }</h5>
// <h6>Name: {props.name}</h6>
// <img src={props.imgUrl}/>
// <h7>Phone: {props.phone}</h7>
// <h8>Email: {props.email}</h8>
// </div>
// </div>

// }

export default ChildCreated;
