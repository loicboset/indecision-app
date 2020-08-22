class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('count')
    const num = JSON.parse(json)
    this.setState(() => ({count: num}))
    console.log("Component mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      const num = JSON.stringify(this.state.count)
      localStorage.setItem('count', num)
      console.log("Component did update")
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  };

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  };

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter counter={1}/>, document.getElementById("app"));


// let count = 0
// const addOne = () => {
//   count++;
//   renderCounterApp()
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp()
// };

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// // CLASS SHOULD BE CALLED CLASSNAME
// // BECAUSE CLASS IS A RESERVED WORD


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
