import React from 'react';

function MyApp(props){
    return(
        <div>
            <img onMouseOver src="https://www.fillmurray.com/200/100" />
            <br />
            <input type="checkbox"  />
            <br />
            <button onClick = "myFunction()">Click</button>
        </div>
    )
}

export default MyApp;