import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

        function Demo(){
            return(
                <div>
            <h2>isLoadingDemo</h2>
            </div>
            )
            }
            
    // const Demo = (props) => {
    // return<div>
    //     <h7>{props.id}</h7>
    //     <br/>
    //         <h8>{props.name}</h8>
    //         <br/>
    //         <p>{props.price.toLocaleString("en-US",{style:"currency",currency:"USD"})} - {props.description}</p>
    //         <br/>
    //         </div>

    // const date = new Date()
    // const hrs = date.getHours()
    // let time
    // if(hrs<12){
    //     time = "morning"
    // }else{
    //     time = "night"
    // }
    // return(
    //     <h6>Good {time}</h6>
    // )

export default Demo
//document.getElementById('root')
//ReactDOM.render(<Demo />, document.getElementById("root"))

//serviceWorker.unregister();