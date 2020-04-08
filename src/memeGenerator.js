import React, { Component } from 'react';

class MemeGenerator extends Component{
    constructor(){
    super()
    this.state = {
        topText : "",
        bottomText : "",
        randomImg : "http://i.imgflip.com/1bij.jpg",
        allMemeImgs : []
    }
    this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
           this.setState({ allMemeImgs : memes })
        })
     }

     handleChange(event){
        const {name, value} = event.target
        this.setState({ [name] :value })
     }

    //  handleSubmit(event){
    //     event.preventDefault()
    //     const randNo = Math.floor(Math.random() * this.state.allMemeImgs.length)
    //     const randMemeImg = this.state.allMemeImgs[randNo].url
    //     this.setState({randomImg : randMemeImg})
    //  }

    render(){
        return(
        <div>
            <form className = "meme-form" onSubmit={this.handleSubmit}>
        
            <input type ="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>
            <input type ="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}/>
            <button> GEN </button>
            <br/>
            </form>
            <div className="meme">
                <img src = {this.state.randomImg} alt="" />
                <h7 className = "top"> {this.state.topText} </h7>
                <h7 className = "bottom"> {this.state.bottomText} </h7>
            </div>
            </div>
        )
    }
}

export default MemeGenerator