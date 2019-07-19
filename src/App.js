import React from 'react';
    
export default class App extends React.Component{

    componentDidMount(){
      setTimeout(function(){ alert("Hello messqge"); }, 2000);

      }

      componentWillUnmount(){
        alert("goodbye")
      }

render(){
      return (<div><h3>Hello</h3></div>)
    }

};
    


