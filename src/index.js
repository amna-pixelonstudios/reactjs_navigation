import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

ReactDOM.render(<App/>, document.getElementById('root'));

// component in a component
// class Car extends React.Component {
//     render() {
//       return <h1>I am a Car!</h1>;
//     }
//   }
// class Attribute extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h2>i'm speedy</h2>
//                 <h2>my color is red</h2>
//                 <Car />
//             </div>
//         );
//     }
// }
 
 // ReactDOM.render(<Attribute/>, document.getElementById('root'));


//  Props example
//  class Car extends React.Component{
//      render(){
//          return <h2>Hi! i'm a {this.props.color} car</h2>
//      }
//  }

//  ReactDOM.render(<Car color="red"/>, document.getElementById('root'));
