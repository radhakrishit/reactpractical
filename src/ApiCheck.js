import React from "react"
import Dummy from "./Dummy"

class ApiCheck extends React.Component{
    constructor(){
        super()
        this.state ={
            items:[],
            isLoading:true
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json)
        .then(data=>
            this.setState({
                isLoading : true,
                items : data
            }))

    }
    render(){
        const itemLength = this.state.items.length
        console.log(itemLength)
        if(!this.state.isLoading){
            return (
                <h1>Loading.....</h1>
            )
        }
        if(itemLength === 0){
            return(
                <h1>There is no items to see</h1>
            )
        }
        const dummy =this.state.items.map(item=>(<Dummy dum={item}/>)) 
        return(
           
            <div>
               {dummy}
            </div>
        )
    }
}

export default ApiCheck