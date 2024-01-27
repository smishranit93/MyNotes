// The JSX we write inside the react is often transpiled into a React.createElement() method with the help of babel compiler.
// React.createElement() method takes the three arguments type , props ,children.
// type: Type of the html element or component (example : h1,h2,p,button, etc).
// props: The properties object (example: {style: { color: “red” }} or className or event handlers etc).
// children: anything you need to pass between the dom elements

let welcome = React.createElement(
  "h1",
  { style: { color: "red" } },
  `Welcome to react world`
);
ReactDOM.render(welcome, document.querySelector("#root"));
// ReactDom.render method accepts two arguments.
// The first argument is which component or element needs to render in the dom.
// The second argument is where to render in the dom.





// This is a pure JavaScript without using jsx.
// Let’s refactor the above code by creating a Welcome component with the classes.
class Welcome extends React.Component {
  render() {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      `Welcome to ${this.props.name}`
    );
  }
}
ReactDOM.render(
  React.createElement(Welcome, { name: "Home page" }, null),
  document.querySelector("#root")
);






// https://www.copycat.dev/blog/reactjs-cdn/




//simple hello world uisng react create createElement
let demo = React.createElement(
    "h1", { style: { color: "green" } }, "Welcome to GeeksforGeeks"
)
ReactDOM.render(
    demo,
    document.getElementById('root')
);



//Counter component example using React createelement ---------------
const  el =  React.createElement;

function Button(props){
  return el('button',{onClick:props.handleClick},props.name);
}
class Counter extends React.Component{
  state= {
       num: 0
  }
  handleIncrement = () =>{
    this.setState({
      num: this.state.num + 1
    })
  }

   handleDecrement = () =>{
    this.setState({
      num: this.state.num - 1
    })
  }

  render(){
    return el('div',null,
                  el(Button,{handleClick:this.handleIncrement,name:'Increment'},null),
                  el(Button,{handleClick:this.handleDecrement,name:'Decrement'},null),
                  el('p',null,this.state.num)
    )
  }
}

//ReactDOM.render(el(Counter,null,null),document.querySelector('#root'));

//Let’s see the same Counter example by using JSX.

function Button(props) {
  return <button onClick={props.handleClick}>{props.name}</button>
}

class Counter extends React.Component {

  state = {
    num: 0
  }

  handleIncrement = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      num: this.state.num - 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <Button name="Increment" handleClick={this.handleIncrement} />
        <Button name="Decrement" handleClick={this.handleDecrement} />
      </div>

    )
  }
}
// ReactDOM.render(<Counter />, document.querySelector('#root'))
// By using JSX, the code readability increases and also we can create components easily this is the reason we use jsx in react apps.
